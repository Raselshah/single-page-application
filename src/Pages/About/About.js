import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="h-screen about-bg">
      <div className="flex h-full justify-around  items-center">
        <div className="">
          <h2 className="text-green-400 text-5xl ">MRS</h2>
        </div>
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-3 text-green-400">
            Hi,
            <br /> I am Rasel,
            <br />
            Web Developer
          </h2>
          <p className="text-white">Front End Developer / React Js</p>
          <p></p>

          <button className="border-2 font-bold hover:bg-green-300 hover:text-white py-2 px-6 mt-5 text-green-300 border-green-300">
            HIRE ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
