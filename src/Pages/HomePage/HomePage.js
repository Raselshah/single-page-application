import React from "react";
import LoadData from "../../hooks/LoadData/LoadData";
import BannerPage from "../BannerPage/BannerPage";
import HomeData from "./HomeData/HomeData";
import "./HomePage.css";

const HomePage = () => {
  const [dataInfo] = LoadData();
  return (
    <>
      <BannerPage />
      <div className="feature-bg">
        <div className=" grid grid-cols-3 mb:grid-cols-2 container mx-auto gap-10 ">
          {dataInfo.map((singleData) => (
            <HomeData key={singleData.id} singleData={singleData}></HomeData>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
