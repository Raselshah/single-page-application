import React from "react";
import auth from "../../firebase.init";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const SocialLink = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  // const googleSignInButton = () => {
  //   signInWithGoogle();
  // };
  return (
    <div className="w-full">
      <button
        onClick={() => signInWithGoogle()}
        className="hover:bg-green-600 hover:text-white bg-green-500  text-lg font-bold w-full text-white mt-10 py-2"
      >
        Continue With Google
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="hover:bg-green-600 hover:text-white bg-green-500  text-lg font-bold w-full text-white mt-5 py-2 mb-4"
      >
        Continue With Github
      </button>
    </div>
  );
};

export default SocialLink;
