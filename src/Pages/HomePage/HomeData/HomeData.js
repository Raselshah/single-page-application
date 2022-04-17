import React from "react";

const HomeData = ({ singleData }) => {
  const { name, price, description, img } = singleData;
  return (
    <div>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default HomeData;
