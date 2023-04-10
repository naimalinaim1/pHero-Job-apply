import React, { useEffect, useState } from "react";
import JobItem from "../JobItem/JobItem";

const FeaturedJob = () => {
  const [jobData, setJobData] = useState([]);
  const [loadAllJob, setLoadAllJob] = useState(false);

  useEffect(() => {
    fetch("company-data.json")
      .then((res) => res.json())
      .then((data) => setJobData(data));
  }, []);

  const seeAllJob = (isLoad) => {
    if (isLoad) {
      setLoadAllJob(true);
    }
    if (!loadAllJob) {
      jobData.length = 4;
    } else {
      fetch("company-data.json")
        .then((res) => res.json())
        .then((data) => setJobData(data));
    }
  };

  seeAllJob();

  return (
    <section className="mt-36">
      <h2 className="text-5xl text-[#1A1919] text-center font-bold leading-[65px]">
        Featured Jobs
      </h2>
      <p className="text-gray-500 text-center mt-2">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobData.map((jobItem) => (
          <JobItem key={jobItem.id} jobItem={jobItem} />
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => seeAllJob(true)}
          className={` ${
            loadAllJob && "hidden"
          } my-8 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-3 rounded-lg text-white text-md font-semibold`}
        >
          See All Jobs
        </button>
      </div>
    </section>
  );
};

export default FeaturedJob;
