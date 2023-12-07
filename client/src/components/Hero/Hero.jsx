import ladyImg from "../../assets/landingpagefemale.svg";
import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="flex flex-col pt-[30px] app:pt-0 app:flex-row bg-gray-100 gap-2 justify-between items-center">
      <div className="space-y-4 text-center app:text-left pt-[30px] app:pt-0 h-fill app:mx-8">
        <h1 className="text-2xl app:text-xl xl:text-2xl text-gray-800 mb-2">Looking for a House help?</h1>
        <h2 className="text-xl app:text-4xl xl:text-5xl font-hero text-gray-700 heroText">Find available helpers and maids in Saudi Arabia</h2>
        <p className="text-gray-600 xl:text-xl">Explore profiles and contact helpers directly</p>
        <div className="flex flex-col app:flex-row space-y-2 app:space-y-0 app:space-x-5 pt-2">
          <button className="px-4 py-2 bg-[#123750] text-white rounded-xl hover:bg-blue-600 transition duration-300 app:w-[150px]"><p>For Employers</p></button>
          <button className="px-4 py-2 bg-[#123750] text-white rounded-xl hover:bg-green-600 transition duration-300 app:w-[150px]"><p>For Helpers</p></button>
        </div>
      </div>
      <div className="mx-0 mt-4 app:mt-0">
        <img src={ladyImg} alt="House helper" className="h-fill" />
      </div>
    </section>
  );
};

export default Hero;
