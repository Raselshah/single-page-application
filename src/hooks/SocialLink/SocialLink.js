import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const SocialLink = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const googleSignInButton = () => {
    signInWithGoogle();
  };
  return (
    <div className="w-full">
      <button
        onClick={googleSignInButton}
        className="hover:bg-green-600 hover:text-white bg-green-500  text-lg font-bold w-full text-white mt-10 py-2"
      >
        Continue With Google
      </button>
      <button className="hover:bg-green-600 hover:text-white bg-green-500  text-lg font-bold w-full text-white mt-5 py-2">
        Continue With Github
      </button>
    </div>
  );
};

export default SocialLink;
