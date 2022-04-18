import { useEffect, useState } from "react";

const LoadData = () => {
  const [dataInfo, setDataInfo] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setDataInfo(data));
  }, []);
  return [dataInfo, setDataInfo];
};
export default LoadData;
