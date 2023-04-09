import React from "react";
import bannerImg from "../../assets/images/header-image.png";

const Banner = () => {
  return (
    <div className="bg-[#FAF8FF] grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center">
      <div>
        <h1 className="text-[80px] font-extrabold leading-[100px]">
          One Step Closer To Your
          <span className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            Dream Job
          </span>
        </h1>
        <p className="text-gray-500 leading-7 font-medium mt-6 mb-8 md:w-3/4">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-3 rounded-lg text-white text-md font-semibold">
          Get Started
        </button>
      </div>
      <div>
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
