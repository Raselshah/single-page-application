import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLink from "../../hooks/SocialLink/SocialLink";
import Loading from "../Loading/Loading";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, ressetError] =
    useSendPasswordResetEmail(auth);
  const [getUser, getLoading, getError] = useAuthState(auth);
  const [oldUserInfo, setOldUserInfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (error?.message) {
      toast.warn("Opps! try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error?.message]);

  if (sending) {
    toast.success("send email verification now!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const [oldUserError, setOldUserError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user || getUser) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading />;
  }

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
    <div className="h-full flex flex-col justify-center items-center mt-5 md:w-2/4 sm:w-full lg:w-1/3 mx-auto">
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
        {oldUserError?.email && (
          <p className="text-red-400">{oldUserError?.email}</p>
        )}
        <input
          onChange={handleLogPasswordButton}
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        {oldUserError?.password && (
          <p className="text-red-400">{oldUserError?.password}</p>
        )}

        {error?.message && (
          <p className="text-red-400 mt-2">{error?.message}</p>
        )}

        <div className="w-full">
          <button
            onClick={() => navigate("/signup")}
            className="underline mt-2 text-green-400 mx-6"
          >
            Create new Account?
          </button>

          <button
            onClick={() => sendPasswordResetEmail(oldUserInfo.email)}
            className="underline mt-2 text-red-400"
          >
            Forget Password?
          </button>
        </div>
        <button
          onClick={logInButton}
          className="hover:bg-green-600 hover:text-white bg-green-500 w-full text-lg font-bold text-white mt-10 py-2"
        >
          Log In
        </button>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <SocialLink />
      </form>
    </div>
  );
};

export default LogIn;
