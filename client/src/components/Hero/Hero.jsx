import ladyImg from "../../assets/landingpagefemale.svg";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col mt-[70px] pt-[30px] app:pt-0 app:mt-[60px] app:flex-row items-center bg-gray-100 gap-2 app:pl-8 justify-between">
      <div className="space-y-4 text-center app:text-left">
        <h1 className="text-2xl app:text-3xl font-bold text-gray-800">Looking for a House help?</h1>
        <h2 className="text-xl app:text-2xl text-gray-700">Find available helpers and maids in Saudi Arabia</h2>
        <p className="text-gray-600">Explore profiles and contact helpers directly</p>
        <div className="flex flex-col app:flex-row space-y-2 app:space-y-0 app:space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">For Employers</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">For Helpers</button>
        </div>
      </div>
      <div className="mx-0 mt-4 app:mt-0">
        <img src={ladyImg} alt="House helper" className="w-auto h-full" />
      </div>
    </section>
  );
};

export default Hero;
