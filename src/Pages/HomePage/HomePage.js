import React from "react";
import LoadData from "../../hooks/LoadData/LoadData";
import HomeData from "./HomeData/HomeData";

const HomePage = () => {
  const [dataInfo] = LoadData();
  return (
    <div>
      {dataInfo.map((singleData) => (
        <HomeData key={singleData.id} singleData={singleData}></HomeData>
      ))}
    </div>
  );
};

export default HomePage;
