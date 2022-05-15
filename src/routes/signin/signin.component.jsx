import { singInWithGooglePopup } from "../../utils/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await singInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign in With Google Popup</button>
    </div>
  );
};
export default SignIn;
