import React from "react";

const CategoryItem = ({ category }) => {
  const bg = {
    background:
      "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
  };
  const imgBg = {
    background:
      "linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%)",
  };

  const { image, title, job_description } = category;

  return (
    <div className="rounded-lg p-12" style={bg}>
      <img className="rounded-lg p-4" style={imgBg} src={image} alt={title} />
      <p className="text-xl font-bold mt-8 text-[#474747]">{title}</p>
      <p className="text-gray-500 mt-1.5">{job_description}</p>
    </div>
  );
};

export default CategoryItem;
