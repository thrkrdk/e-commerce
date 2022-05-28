import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropDownContainer,
  CartItems,
  EmptMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goToCheckoutHandler = useCallback(() => navigate("/checkout"), []);

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptMessage>Your cart is empty</EmptMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
