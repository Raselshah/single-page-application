import React from "react";
import { Link } from "react-router-dom";
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
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About me</Link>
      </nav>
    </div>
  );
};

export default NavMenu;
