import { getCart } from "./fakeDB";

const singleJobDataLoad = async (id) => {
  const data = await fetch("/company-data.json");
  const res = await data.json();

  const findData = res.find((data) => data.id == id);

  if (findData) {
    return findData;
  } else {
    return [];
  }
};

// load  all job data
const loadAllJob = async () => {
  const data = await fetch("/company-data.json");
  const res = await data.json();
  return res;
};

// load only applied job data
const loadAppliedJobData = async () => {
  const allJobData = await loadAllJob();
  const getStoredCart = await getCart();
  const jobs = [];

  getStoredCart.forEach((cartId) => {
    const getAppliedJob = allJobData.find(
      (singleJob) => singleJob.id == cartId
    );
    jobs.push(getAppliedJob);
  });
  return jobs;
};

export { singleJobDataLoad, loadAllJob, loadAppliedJobData };
