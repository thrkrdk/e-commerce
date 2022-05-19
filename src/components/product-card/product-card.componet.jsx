import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contex";
import Button from "../button.component/button.component";
import "./product-carda.style.scss";

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCar = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCar}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
