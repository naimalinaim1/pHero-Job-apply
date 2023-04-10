import React, { useContext, useEffect, useState } from "react";
import OtherBanner from "../OtherBanner/OtherBanner";
import ViewAppliedJob from "../ViewAppliedJob/ViewAppliedJob";
import { JobData } from "../../App";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const allJobData = useContext(JobData);
  const appliedJobData = useLoaderData();
  const [showAppliedData, setShowAppliedData] = useState(appliedJobData);

  // filter data by dropdown menu select
  const handleFilterJob = (e) => {
    const text = e.target.value;
    if (text == 1) {
      const getRemoteJobData = appliedJobData.filter(
        (singleData) => singleData.remote_or_onsite.toLowerCase() == "remote"
      );
      setShowAppliedData(getRemoteJobData);
    } else if (text == 2) {
      const getOnsiteJobData = appliedJobData.filter(
        (singleData) => singleData.remote_or_onsite.toLowerCase() == "onsite"
      );
      setShowAppliedData(getOnsiteJobData);
    } else {
      setShowAppliedData(appliedJobData);
    }
  };

  return (
    <main>
      <OtherBanner title="Applied Jobs" />
      <div className="mt-36 mb-10 text-right px-10 sm:px-4 md:px-8 lg:px-24">
        <select
          onChange={handleFilterJob}
          className="bg-gray-300 p-2 px-5 rounded-md cursor-pointer"
        >
          <option>Filter All</option>
          <option value={1}>Remote Job</option>
          <option value={2}>On-site Job</option>
        </select>
      </div>
      <div className="px-10 sm:px-4 md:px-8 lg:px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
        {showAppliedData.map((singleData) => (
          <ViewAppliedJob key={singleData.id} item={singleData} />
        ))}
      </div>
    </main>
  );
};

export default AppliedJobs;
