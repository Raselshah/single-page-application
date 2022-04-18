import React from "react";
import "./HomeData.css";

const HomeData = ({ singleData, buyNowButton }) => {
  const { id, name, price, description } = singleData;

  return (
    <>
      <div className="service-info cursor-pointer mt-12 p-8 mb-10 bg-white">
        <h2 className=" text-2xl font-bold mb-3">{name}</h2>
        <p>{description.slice(0, 150) + "..."}</p>
        <p className="text-lg mt-2">$ {price}</p>
        <button
          onClick={() => buyNowButton(id)}
          className="text-green-500 mt-5 underline"
        >
          Buy Now-
        </button>
      </div>

      {/* {<CheckOut id={id}></CheckOut>} */}
    </>
  );
};

export default HomeData;
