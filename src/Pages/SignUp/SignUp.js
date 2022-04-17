import React from "react";
import SocialLink from "../../hooks/SocialLink/SocialLink";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center mt-5 w-1/3 mx-auto">
      <h2 className="text-black text-3xl font-bold uppercase tracking-widest signup-title">
        Fit<span style={{ color: "greenyellow" }}>L</span>ife G
        <span style={{ color: "greenyellow" }}>y</span>m
      </h2>
      <form className="flex flex-col justify-center items-center h-full  from-style">
        <input type="text" name="name" id="" placeholder="Name" />
        <input type="text" name="email" id="" placeholder="Email" />
        <input type="password" name="password" id="" placeholder="Password" />
        <input
          type="password"
          name="ConfirmPassword"
          id=""
          placeholder="Confirm Password"
        />
        <button className="hover:bg-green-600 hover:text-white bg-green-500 w-full text-lg font-bold text-white mt-10 py-2">
          Sign Up
        </button>

        <SocialLink />
      </form>
    </div>
  );
};

export default SignUp;
