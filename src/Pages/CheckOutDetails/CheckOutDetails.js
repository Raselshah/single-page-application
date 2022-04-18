import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckOut from "../CheckOut/CheckOut";
import ServicesData from "../ServicesData/ServicesData";

const CheckOutDetails = () => {
  const { id } = useParams();

  const [dataFetch, setDataFetch] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3000/fakeData.json")
        .then((res) => res.json())
        .then((data) => {
          const servicesData = data.find((serviceData) => serviceData.id == id);
          setDataFetch(servicesData);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 mb-5 m-auto container">
      <ServicesData key={dataFetch.id} dataFetch={dataFetch}></ServicesData>
      <CheckOut />
    </div>
  );
};

export default CheckOutDetails;
