import React, { useEffect, useState } from "react";
import OtherBanner from "../OtherBanner/OtherBanner";
import { getCart } from "../../utilities/fakeDB";
import ViewAppliedJob from "../ViewAppliedJob/ViewAppliedJob";

const AppliedJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

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

  return (
    <main>
      <OtherBanner title="Applied Jobs" />
      <div className="px-10 sm:px-4 md:px-8 lg:px-24 mt-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
        {appliedJobs[0]?.id &&
          appliedJobs.map((item) => (
            <ViewAppliedJob key={item?.id} item={item} />
          ))}
      </div>
    </main>
  );
};

export default AppliedJobs;
