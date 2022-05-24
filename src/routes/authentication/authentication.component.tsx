import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import  * as Styled from './authentication.styles';

const Authentication = () => {
  return (
    <Styled.AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </Styled.AuthenticationContainer>
  );
};
export default Authentication;
