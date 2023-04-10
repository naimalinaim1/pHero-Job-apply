import React from "react";
import locationImg from "../../assets/Icons/location.png";
import dolorImg from "../../assets/Icons/frame.png";
import { Link } from "react-router-dom";

const ViewAppliedJob = ({ item }) => {
  const {
    id,
    company_logo,
    company_name,
    job_title,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = item;

  return (
    <div className="border rounded-lg p-2 text-center md:text-left md:flex gap-6 items-center mb-6">
      <div className="bg-gray-200 w-44 h-44 mx-auto md:mx-0 md:w-60 md:h-60  rounded-lg flex justify-center items-center">
        <img className="w-36  h-36" src={company_logo} alt={company_name} />
      </div>
      <div className="mr-auto">
        <h3 className="mt-8 text-[#474747] text-[24px] font-extrabold">
          {job_title}
        </h3>
        <p className="text-gray-500 mt-2 mb-4">{company_name}</p>
        <button className="border-2 rounded-md py-1.5 px-3 text-lg mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          {remote_or_onsite}
        </button>
        <button className="border-2 rounded-md py-1.5 px-3 text-lg mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          {fulltime_or_parttime}
        </button>
        <p className="flex flex-col md:block lg:flex lg:flex-row items-center mt-4 text-gray-500">
          <span className="flex items-center md:mb-2 lg:mb-0">
            <img src={locationImg} alt="Location" />
            {location}
          </span>
          <span className="flex items-center ml-2 md:ml-0 lg:ml-2">
            <img src={dolorImg} className="grayscale" alt="Dolor" />
            {salary}
          </span>
        </p>
      </div>
      <Link to={`/job/${id}`}>
        <button className="mt-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-3 rounded-lg text-white text-md font-semibold">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ViewAppliedJob;
