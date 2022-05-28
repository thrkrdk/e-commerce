import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { CartItem } from "../../store/cart/cart.types";

import * as Styled from "./checkout-item.styles";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const cleartItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  const removeItemFromCartHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <Styled.CheckOutItemContainer>
      <Styled.ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </Styled.ImageContainer>
      <Styled.BaseSpan>{name}</Styled.BaseSpan>
      <Styled.Quantity>
        <Styled.Arrow onClick={removeItemFromCartHandler}>
          &#10094;
        </Styled.Arrow>
        <Styled.Value>{quantity}</Styled.Value>
        <Styled.Arrow onClick={addItemHandler}>&#10095; </Styled.Arrow>
      </Styled.Quantity>
      <Styled.BaseSpan>{price}</Styled.BaseSpan>
      <Styled.RemoveButton onClick={cleartItemHandler}>
        &#10005;
      </Styled.RemoveButton>
    </Styled.CheckOutItemContainer>
  );
});

export default CheckoutItem;
