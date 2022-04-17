import React from "react";
import { useNavigate } from "react-router-dom";
import "./BannerPage.css";

const BannerPage = () => {
  const navigate = useNavigate();
  return (
    <div className="banner">
      <div className=" grid h-screen content-center container leading-loose mx-auto">
        <p className="text-white">-GYM & FITNESS TRAINING CENTER </p>
        <h2 className="text-white text-5xl font-extrabold">
          Indoor Gym Opening Now <br /> Open With 20% <br /> Discount
        </h2>
        <button
          onClick={() => navigate("/about")}
          className="hover:bg-white hover:text-green-500 bg-green-500 py-1 text-lg font-bold text-white mt-10 w-36"
        >
          About Me
        </button>
      </div>
    </div>
  );
};

export default BannerPage;
