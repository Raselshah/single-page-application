import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral-900 h-36">
      <div className=" h-full flex flex-col items-center justify-center container mx-auto">
        <h2 className="text-white text-2xl font-bold uppercase tracking-widest">
          Fit<span style={{ color: "greenyellow" }}>L</span>ife G
          <span style={{ color: "greenyellow" }}>y</span>m
        </h2>

        <p className="text-white">All right reserved by &copy; MRS</p>
      </div>
    </div>
  );
};

export default Footer;
