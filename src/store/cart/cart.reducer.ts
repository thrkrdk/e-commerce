import { AnyAction } from "redux";
import { setcartItems, setIsCartOpen } from "./cart.action";
import { CartItem } from "./cart.types";

export type CartState = {
  readonly isCartOpen: false;
  readonly cartItems: CartItem[];
};

export const CART_INITAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITAL_STATE, action: AnyAction) => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  if (setcartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;
};
