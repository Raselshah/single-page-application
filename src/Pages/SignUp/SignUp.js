import React, { useEffect, useState } from "react";
import SocialLink from "../../hooks/SocialLink/SocialLink";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  useEffect(() => {
    if (error?.message) {
      toast.warn("opps! try again", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error?.message]);

  useEffect(() => {
    if (user) {
      toast.success("Send email verification", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [user]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  if (loading) {
    <Loading />;
  }
  if (user) {
    navigate("/home");
  }

  const [userError, setUserError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(userInfo.email);
  const handleEmailButton = (event) => {
    const emailCheck = /\S+@\S+\.\S+/;
    const validEmail = emailCheck.test(event.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setUserError({ email: "" });
    } else {
      setUserError({ email: "invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordButton = (event) => {
    const passwordCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const validPassword = passwordCheck.test(event.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setUserError({ password: "" });
    } else {
      setUserError({
        password:
          "Minimum eight characters, at least one letter and one number",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleConfirmPasswordButton = (event) => {
    if (event.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: event.target.value });
      setUserError({ confirmPassword: "" });
    } else {
      setUserError({ confirmPassword: "Password didn't match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };

  const signUpEmailButton = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center mt-5 sm:w-full md:w-2/3 lg:w-1/3 mx-auto">
      <h2 className="text-black text-3xl font-bold uppercase tracking-widest signup-title">
        Fit<span style={{ color: "greenyellow" }}>L</span>ife G
        <span style={{ color: "greenyellow" }}>y</span>m
      </h2>
      <form
        onSubmit={signUpEmailButton}
        className="flex flex-col justify-center items-center h-full  from-style"
      >
        <input type="text" name="name" id="" placeholder="Name" required />
        <input
          onChange={handleEmailButton}
          type="text"
          name="email"
          id=""
          placeholder="Email"
        />
        {userError?.email && (
          <p className="text-red-400">{userError?.email} </p>
        )}
        <input
          onChange={handlePasswordButton}
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        {userError?.password && (
          <p className="text-red-400">{userError?.password} </p>
        )}
        <input
          onChange={handleConfirmPasswordButton}
          type="password"
          name="ConfirmPassword"
          id=""
          placeholder="Confirm Password"
        />
        {userError?.confirmPassword && (
          <p className="text-red-400">{userError?.confirmPassword}</p>
        )}

        <button
          onClick={() => navigate("/login")}
          className="underline mt-2 text-green-400"
        >
          Already have an account?
        </button>
        <button
          onClick={signUpEmailButton}
          className="hover:bg-green-600 hover:text-white bg-green-500 w-full text-lg font-bold text-white mt-10 py-2"
        >
          Sign Up
        </button>
        <ToastContainer></ToastContainer>
        <SocialLink />
      </form>
    </div>
  );
};

export default SignUp;
