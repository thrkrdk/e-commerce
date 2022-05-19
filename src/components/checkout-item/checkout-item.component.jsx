import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contex";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const cleartItemHandler = () => {
    clearItemFromCart(cartItem);
  };
  const addItemToCartHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemFromCartHandler = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow">
          <span onClick={removeItemFromCartHandler}>&#10094;</span>
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow">
          <span onClick={addItemToCartHandler}>&#10095;</span>
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={cleartItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
