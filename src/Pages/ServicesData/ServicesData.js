import React from "react";

const ServicesData = ({ dataFetch }) => {
  console.log(dataFetch);
  const { price, name, img, description } = dataFetch;
  return (
    <div className="flex justify-center items-center h-full">
      <div className="services-info shadow-lg p-4">
        <h2 className="text-4xl font-bold mb-2">{name}</h2>
        <p className="text-stone-600 mb-4">{description}</p>
        <p className="text-4xl text-amber-600 mb-2">${price}</p>
        <img className="w-6/12" src={img} alt="" />
      </div>
    </div>
  );
};

export default ServicesData;
