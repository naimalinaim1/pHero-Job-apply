const jobDataLoad = async (id) => {
  const data = await fetch("/company-data.json");
  const res = await data.json();

  const findData = res.find((data) => data.id == id);

  if (findData) {
    return findData;
  } else {
    return [];
  }
};

export { jobDataLoad };
