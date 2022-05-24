import { FC } from "react";
import { CartItem as TCartItem } from "../../store/cart/cart.types";
import { CartItemContainer, CartItemDetails } from "./cart-item.styles.jsx";


type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
