import React from "react";
import locationImg from "../../assets/Icons/location.png";
import dolorImg from "../../assets/Icons/frame.png";
import { Link } from "react-router-dom";

const JobItem = ({ jobItem }) => {
  const {
    id,
    company_logo,
    company_name,
    job_title,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = jobItem;

  return (
    <div className="border rounded-lg p-10">
      <img className="w-28  h-12" src={company_logo} alt={company_name} />
      <h3 className="mt-8 text-[#474747] text-[24px] font-extrabold">
        {job_title}
      </h3>
      <p className="text-gray-500 mt-2 mb-4">{company_name}</p>
      <button className="border-2 rounded-md py-2 px-3 text-lg mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
        {remote_or_onsite}
      </button>
      <button className="border-2 rounded-md py-2 px-3 text-lg mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
        {fulltime_or_parttime}
      </button>
      <p className="flex md:block lg:flex items-center mt-4 text-gray-500">
        <span className="flex items-center md:mb-2 lg:mb-0">
          <img src={locationImg} alt="Location" />
          {location}
        </span>
        <span className="flex items-center ml-2 md:ml-0 lg:ml-2">
          <img src={dolorImg} className="grayscale" alt="Dolor" />
          {salary}
        </span>
      </p>
      <Link to={`/job/${id}`}>
        <button className="mt-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-3 rounded-lg text-white text-md font-semibold">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobItem;
