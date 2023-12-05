import ladyImg from "../../assets/landingpagefemale.svg";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col mt-[70px] md:mt-[60px] md:flex-row items-center bg-gray-100 p-8 pr-0 pb-0">
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Looking for a House help?</h1>
        <h2 className="text-xl md:text-2xl text-gray-700">Find available helpers and maids in Saudi Arabia</h2>
        <p className="text-gray-600">Explore profiles and contact helpers directly</p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">For Employers</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">For Helpers</button>
        </div>
      </div>
      <div className="flex-1 mt-0 mr-0 md:mt-0">
        <img src={ladyImg} alt="House helper" className="w-auto h-full" />
      </div>
    </section>
  );
};

export default Hero;
