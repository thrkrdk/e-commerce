import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// middleWares

// custom middleWare
/* const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

const middleWares = [loggerMiddleware]; */

// react-logger
const middleWares = [logger];

const composedEnchancers = compose(applyMiddleware(...middleWares));

// root reducer
export const store = createStore(rootReducer, undefined, composedEnchancers);
