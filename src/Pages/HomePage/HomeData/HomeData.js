import React from "react";
import "./HomeData.css";

const HomeData = ({ singleData }) => {
  const { name, price, description } = singleData;
  return (
    <div className="service-info cursor-pointer  mt-10 p-8 mb-10 bg-white">
      <h2 className=" text-2xl font-bold mb-3">{name}</h2>
      <p>{description.slice(0, 150) + "..."}</p>
      <p className="text-lg mt-2">$ {price}</p>
      <button className="text-green-500 mt-5">Detail More -</button>
    </div>
  );
};

export default HomeData;
