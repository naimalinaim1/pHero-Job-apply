import React from "react";
import bgImg from "../../assets/images/vector.png";

const OtherBanner = ({ title }) => {
  return (
    <header className="relative bg-[#FAF8FF] pt-4">
      <img src={bgImg} alt="banner icon" />
      <h3
        className="absolute top-[50%] left-[50%]  text-[#1A1919] text-3xl font-semibold w-full text-center"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {title}
      </h3>
    </header>
  );
};

export default OtherBanner;
