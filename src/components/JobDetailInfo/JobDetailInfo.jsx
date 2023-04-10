import React from "react";

const JobDetailInfo = ({ jobInfo }) => {
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = jobInfo;

  return (
    <>
      <p className="font-bold leading-[32px] mb-6 text-justify">
        Job Description:
        <span className="font-medium text-[#757575]">{job_description}</span>
      </p>
      <p className="font-bold leading-[32px] mb-6 text-justify">
        Job Responsibility:
        <span className="font-medium text-[#757575]">{job_responsibility}</span>
      </p>
      <p className="font-bold leading-[32px] mb-6 text-justify">
        Educational Requirements:
        <span className="font-medium text-[#757575] block">
          {educational_requirements}
        </span>
      </p>
      <p className="font-bold leading-[32px] mb-6 text-justify">
        Experiences:
        <span className="font-medium text-[#757575] block">{experiences}</span>
      </p>
    </>
  );
};

export default JobDetailInfo;
