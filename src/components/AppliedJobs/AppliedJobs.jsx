import React, { useEffect, useState } from "react";
import OtherBanner from "../OtherBanner/OtherBanner";
import { getCart } from "../../utilities/fakeDB";
import ViewAppliedJob from "../ViewAppliedJob/ViewAppliedJob";

const AppliedJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [searchJob, setSearchJob] = useState([]);

  //   load all jobs
  useEffect(() => {
    fetch("company-data.json")
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  }, []);

  //   load applied jobs
  useEffect(() => {
    const getStoredCart = getCart();
    const jobs = [];
    getStoredCart.forEach((cartId) => {
      const getAppliedJob = allJobs.find((job) => job.id == cartId);
      jobs.push(getAppliedJob);
    });
    setAppliedJobs(jobs);
  }, [allJobs]);

  // filter by select menu
  const handleFilterJob = (e) => {
    const value = e.target.value;
    const filterText = value == 1 ? "remote" : value == 2 ? "onsite" : "";

    const getFilterJob =
      filterText.length > 0 &&
      appliedJobs.filter(
        (job) => job.remote_or_onsite.toLowerCase() === filterText
      );

    setSearchJob(getFilterJob);
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
        {searchJob[0]?.id
          ? searchJob.map((item) => (
              <ViewAppliedJob key={item?.id} item={item} />
            ))
          : appliedJobs[0]?.id &&
            appliedJobs.map((item) => (
              <ViewAppliedJob key={item?.id} item={item} />
            ))}
      </div>
    </main>
  );
};

export default AppliedJobs;
