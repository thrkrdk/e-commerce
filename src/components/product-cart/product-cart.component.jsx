import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-cart.style.scss";

export const ProductCart = ({ product }) => {
  const { name, price, imageUrl } = product;
  const distpatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addProductToCar = () => distpatch(addItemToCart(cartItems, product));

  return (
    <div className="product-cart-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCar}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCart;
