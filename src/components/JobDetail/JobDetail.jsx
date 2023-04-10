import React from "react";
import { useLoaderData } from "react-router-dom";
import JobDetailCart from "../JobDetailCart/JobDetailCart";
import JobDetailInfo from "../JobDetailInfo/JobDetailInfo";
import OtherBanner from "../OtherBanner/OtherBanner";

const JobDetail = () => {
  const jobInfo = useLoaderData();
  let jobInfoJSX = (
    <p className="text-3xl font-semibold">No Job Details found</p>
  );

  if (jobInfo.id) {
    jobInfoJSX = (
      <div className="px-4 sm:px-10 md:px-16 lg:px-0 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-6">
        <div>
          <JobDetailInfo jobInfo={jobInfo} />
        </div>
        <div>
          <JobDetailCart jobInfo={jobInfo} />
        </div>
      </div>
    );
  }

  return (
    <section>
      <OtherBanner title="Job Details" />
      <main className="mt-36">{jobInfoJSX}</main>
    </section>
  );
};

export default JobDetail;
