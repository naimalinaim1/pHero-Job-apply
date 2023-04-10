import React, { useEffect, useState } from "react";
import dolorImg from "../../assets/Icons/frame.png";
import titleImg from "../../assets/Icons/frame-1.png";
import phoneImg from "../../assets/Icons/frame-2.png";
import emailImg from "../../assets/Icons/frame-3.png";
import locationImg from "../../assets/Icons/location.png";
import {
  addToCart,
  checkExistCart,
  removeFromCart,
} from "../../utilities/fakeDB";
import toast from "react-hot-toast";

const JobDetailCart = ({ jobInfo }) => {
  const { id, job_title, contact_information, location, salary } = jobInfo;

  // react toast
  const success = () => toast.success("Job Apply successful");
  const error = () => toast.error("this job apply cancel successful");

  const [isApply, setIsApply] = useState(false);

  // apply job
  const handleApplyJob = (id) => {
    addToCart(id);
    setIsApply(true);
    success();
  };

  const isExistsApply = () => {
    const apply = checkExistCart(id);
    if (apply) {
      setIsApply(true);
    } else {
      setIsApply(false);
    }
  };

  // load is previous apply
  useEffect(() => {
    isExistsApply();
  }, []);

  // remove job
  const handleRemoveJob = (id) => {
    const isConfirm = confirm("Are you sure this job apply cancel.");
    if (isConfirm) {
      removeFromCart(id);
      error();
      setIsApply(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#7E90FE]/10 to-[#9873FF]/10 p-4 rounded-lg mb-4">
        <h3 className="pb-6 border-b-2 text-xl font-extrabold">Job Details</h3>
        <div className="mt-6 space-y-4">
          {/* salary */}
          <p className="flex gap-2 items-center font-extrabold text-[#474747] text-xl">
            <img src={dolorImg} alt="icon" /> Salary:
            <span className="text-gray-500 font-medium">{salary}</span>
          </p>
          {/* job title */}
          <p className="flex gap-2 items-center font-extrabold text-[#474747] text-xl">
            <img src={titleImg} alt="icon" /> Job Title:
            <span className="text-gray-500 font-medium">{job_title}</span>
          </p>
        </div>
        <h3 className="mt-8 pb-6 mb-6 border-b-2 text-xl font-extrabold">
          Contact Information
        </h3>
        <div className="space-y-4">
          {/* phone */}
          <p className="flex gap-2 items-center font-extrabold text-[#474747] text-xl">
            <img src={phoneImg} alt="icon" /> Phone:
            <span className="text-gray-500 font-medium">
              {contact_information?.phone}
            </span>
          </p>
          {/* email */}
          <p className="flex gap-2 items-center font-extrabold text-[#474747] text-xl">
            <img src={emailImg} alt="icon" /> Email:
            <span className="text-gray-500 font-medium">
              {contact_information?.email}
            </span>
          </p>
          {/* address */}
          <p className="flex gap-2 items-center font-extrabold text-[#474747] text-xl">
            <img src={locationImg} alt="icon" /> Address:
            <span className="text-gray-500 font-medium">{location}</span>
          </p>
        </div>
      </div>
      {isApply ? (
        <button
          onClick={() => handleRemoveJob(id)}
          className="w-full bg-gradient-to-r from-[#9a1818] to-[#971479] py-3 px-3 rounded-lg text-white text-md font-semibold"
        >
          Cancel Apply
        </button>
      ) : (
        <button
          onClick={() => handleApplyJob(id)}
          className="w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-3 rounded-lg text-white text-md font-semibold"
        >
          Apply Now
        </button>
      )}
    </>
  );
};

export default JobDetailCart;
