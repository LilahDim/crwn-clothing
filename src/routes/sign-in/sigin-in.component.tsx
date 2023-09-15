import {
  signInWIthGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWIthGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1> Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
