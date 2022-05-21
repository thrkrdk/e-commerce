import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
// import thunk from "redux-thunk";
// import customLogger from "./middleware/logger";

const persistConfig = {
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
].filter(Boolean);

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
