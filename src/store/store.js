import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import customLogger from "./middleware/logger";

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["user"], // userState out
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

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

export const persistor = persistStore(store);
