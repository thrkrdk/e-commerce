import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const cleartItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));

  const removeItemFromCartHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

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
