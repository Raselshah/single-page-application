import React from "react";
import LoadData from "../../hooks/LoadData/LoadData";
import BannerPage from "../BannerPage/BannerPage";
import HomeData from "./HomeData/HomeData";
import "./HomePage.css";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [dataInfo] = LoadData();

  const navigate = useNavigate();
  const buyNowButton = (id) => {
    console.log(id);
    navigate(`/checkout/${id}`);
  };
  return (
    <>
      <BannerPage />
      <div className="feature-bg">
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb:grid-cols-2 container mx-auto gap-10 ">
          {dataInfo.map((singleData) => (
            <HomeData
              key={singleData.id}
              singleData={singleData}
              buyNowButton={buyNowButton}
            ></HomeData>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
