import React, { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("job-category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <section className="mt-36">
      <h2 className="text-5xl text-[#1A1919] text-center font-bold leading-[65px]">
        Job Category List
      </h2>
      <p className="text-gray-500 text-center mt-2">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {category.map((item) => (
          <CategoryItem key={item.id} category={item} />
        ))}
      </div>
    </section>
  );
};

export default Category;
