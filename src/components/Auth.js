import {auth, provider} from "../firebase.js";
import {signInWithPopup} from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Auth = (props) => {
  
  const {setIsAuth} = props;
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    }catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="auth">
      <p> Sign In To Continue ! </p>
      <button onClick={signIn}> Sign In With Google </button>
    </div>
  );


};

export default Auth