import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLink from "../../hooks/SocialLink/SocialLink";

const LogIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [getUser, getLoading, getError] = useAuthState(auth);
  const [oldUserInfo, setOldUserInfo] = useState({
    email: "",
    password: "",
  });

  const [oldUserError, setOldUserError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  // useEffect(() => {
  //   if (getUser) {
  //     navigate(from, { replace: true });
  //   }
  // }, [getUser]);

  const handleLogEmailButton = (event) => {
    const emailCheck = /\S+@\S+\.\S+/;
    const validEmail = emailCheck.test(event.target.value);
    if (validEmail) {
      setOldUserInfo({ ...oldUserInfo, email: event.target.value });
      setOldUserError({ email: "" });
    } else {
      setOldUserError({ email: "invalid email" });
      setOldUserInfo({ ...oldUserInfo, email: "" });
    }
  };

  const handleLogPasswordButton = (event) => {
    const passwordCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const validPassword = passwordCheck.test(event.target.value);
    if (validPassword) {
      setOldUserInfo({ ...oldUserInfo, password: event.target.value });
      setOldUserError({ password: "" });
    } else {
      setOldUserError({
        password:
          "Minimum eight characters, at least one letter and one number",
      });
      setOldUserInfo({ ...oldUserInfo, password: "" });
    }
  };

  const logInButton = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(oldUserInfo.email, oldUserInfo.password);
  };
  return (
    <div className="h-full flex flex-col justify-center items-center mt-5 w-1/3 mx-auto">
      <h2 className="text-black text-3xl font-bold uppercase tracking-widest signup-title">
        Fit<span style={{ color: "greenyellow" }}>L</span>ife G
        <span style={{ color: "greenyellow" }}>y</span>m
      </h2>
      <form
        onSubmit={logInButton}
        className="flex flex-col justify-center items-center h-full  from-style"
      >
        <input
          onChange={handleLogEmailButton}
          type="text"
          name="email"
          id=""
          placeholder="Email"
        />
        {oldUserError?.email && <p>{oldUserError?.email}</p>}
        <input
          onChange={handleLogPasswordButton}
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        {oldUserError?.password && <p>{oldUserError?.password}</p>}
        <button
          onClick={logInButton}
          className="hover:bg-green-600 hover:text-white bg-green-500 w-full text-lg font-bold text-white mt-10 py-2"
        >
          Log In
        </button>

        <SocialLink />
      </form>
    </div>
  );
};

export default LogIn;
