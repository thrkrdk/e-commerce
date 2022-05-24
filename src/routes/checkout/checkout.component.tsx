import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import * as Styled from "./checkout.styles";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <Styled.CheckoutContainer>
      <Styled.CheckoutHeader>
        <Styled.HeaderBlock>
          <span>Product</span>
        </Styled.HeaderBlock>
        <Styled.HeaderBlock>
          <span>Description</span>
        </Styled.HeaderBlock>
        <Styled.HeaderBlock>
          <span>Quantity</span>
        </Styled.HeaderBlock>
        <Styled.HeaderBlock>
          <span>Price</span>
        </Styled.HeaderBlock>
        <Styled.HeaderBlock>
          <span>Remove</span>
        </Styled.HeaderBlock>
      </Styled.CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Styled.Total>Total: ${cartTotal}</Styled.Total>
      <PaymentForm />
    </Styled.CheckoutContainer>
  );
};

export default CheckOut;
