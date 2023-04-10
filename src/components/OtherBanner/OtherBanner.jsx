import React from "react";
import bgImg from "../../assets/images/vector.png";

const OtherBanner = ({ title }) => {
  return (
    <header className="relative bg-[#FAF8FF] pt-4">
      <img src={bgImg} alt="banner icon" />
      <h3 className="absolute top-[30%] left-[45%] text-center text-[#1A1919] text-3xl font-semibold">
        {title}
      </h3>
    </header>
  );
};

export default OtherBanner;
