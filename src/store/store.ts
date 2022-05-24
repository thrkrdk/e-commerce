import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
  Middleware
} from "redux";
import logger from "redux-logger";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  // blacklist: ["user"], // userState out
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  // thunk,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composedEnchancer =
  (process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnchancers = composedEnchancer(applyMiddleware(...middleWares));

// root reducer
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnchancers
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
