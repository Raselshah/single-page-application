import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./NavMenu.css";
const NavMenu = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div
      style={{ background: "#01060f" }}
      className="flex items-center justify-around h-20"
    >
      <h2 className="text-white text-3xl font-bold uppercase tracking-widest">
        Fit<span style={{ color: "greenyellow" }}>L</span>ife G
        <span style={{ color: "greenyellow" }}>y</span>m
      </h2>
      <nav className="navbar flex">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/about">About me</CustomLink>
        <CustomLink to="/signup">Sign Up</CustomLink>
        {user?.uid ? (
          <CustomLink to="/login">Log Out</CustomLink>
        ) : (
          <CustomLink to="/login">Log In</CustomLink>
        )}
      </nav>
    </div>
  );
};

export default NavMenu;
