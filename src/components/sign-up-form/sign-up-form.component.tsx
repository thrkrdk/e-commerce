import { AuthError, AuthErrorCodes } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.components";
import * as Styled from "./sign-up-form.styles";

const defaultFormFileds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFileds);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFileds = () => {
    setFormFields(defaultFormFileds);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFileds();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot Create user, email already in use");
      } else {
        console.error("user creation encontered error: ", error);
      }
    }
  };

  const handleChanges = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Styled.SignUpContainer>
      <h2>Don't have an account?</h2>
      <span> Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handleChanges}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChanges}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </Styled.SignUpContainer>
  );
};

export default SignUpForm;
