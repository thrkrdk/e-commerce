import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/categories.types";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import * as Styled from "./product-cart.style";

type ProductCartProps = {
  product: CategoryItem;
};

export const ProductCart: FC<ProductCartProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const distpatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addProductToCar = () => distpatch(addItemToCart(cartItems, product));

  return (
    <Styled.ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Styled.Footer>
        <Styled.Name className="name">{name}</Styled.Name>
        <Styled.Price className="price">{price}</Styled.Price>
      </Styled.Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCar}
      >
        Add to card
      </Button>
    </Styled.ProductCartContainer>
  );
};

export default ProductCart;
