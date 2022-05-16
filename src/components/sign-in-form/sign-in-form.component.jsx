import { useState } from "react";
import {
  singInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase.utils";
import Button from "../button.component/button.component";
import FormInput from "../form-input/form-input.components";

import "./sign-in-form.styles.scss";

const defaultFormFileds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFileds);
  const { email, password } = formFields;

  const resetFormFileds = () => {
    setFormFields(defaultFormFileds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!password) {
      alert("passwords can not be empty");
      return;
    }
    try {
      signInAuthWithEmailAndPassword(email, password);
      resetFormFileds();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email.");
          break;
        default:
          console.error(error);
      }
    }
  };

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithgoogle = async () => {
    const { user } = await singInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span> Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChanges}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChanges}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={signInWithgoogle} type="button">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
