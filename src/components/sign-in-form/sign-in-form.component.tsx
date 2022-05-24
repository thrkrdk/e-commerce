import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.components";
import "./sign-in-form.styles.scss";

const defaultFormFileds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFileds);
  const { email, password } = formFields;

  const resetFormFileds = () => {
    setFormFields(defaultFormFileds);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!password) {
      alert("passwords can not be empty");
      return;
    }
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFileds();
    } catch (error) {
      console.error("user sing error", error);
    }
  };

  const handleChanges = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithgoogle = async () => {
    dispatch(googleSignInStart());
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
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithgoogle}
            type="button"
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
