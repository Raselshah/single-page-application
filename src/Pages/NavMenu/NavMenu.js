import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./NavMenu.css";
const NavMenu = () => {
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
        <CustomLink to="/login">Log In</CustomLink>
      </nav>
    </div>
  );
};

export default NavMenu;
