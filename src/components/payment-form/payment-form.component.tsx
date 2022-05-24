import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./payment-form.styles";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  FormContainer,
  PaymentButton,
  PaymentFormContainer,
} from "./payment-form.styles";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { FormEvent, useState } from "react";
import { StripeCardElement } from "@stripe/stripe-js";

const ifValidCardElemen = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    console.log("rrr", response);

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement);
    if (!ifValidCardElemen(cardDetails)) return;
    
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);
    if (paymentResult.error) alert(paymentResult.error.code);
    else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Cart Payment:</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
