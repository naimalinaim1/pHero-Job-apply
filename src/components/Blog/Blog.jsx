import React from "react";

const Blog = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-[#7E90FE]">
        Answer The Question
      </h2>
      <div className="mt-10 gap-10 grid grid-cols-1 md:grid-cols-2">
        {/* context api */}
        <div className="bg-gray-200 rounded-lg py-4 px-6">
          <h3 className="text-2xl text-[#7E90FE] font-semibold mb-3">
            1. When should you use context API?
          </h3>
          <p className="leading-8 text-lg text-gray-700">
            When some data need to many components ad different nesting level.
          </p>
        </div>
        {/* custom hook */}
        <div className="bg-gray-200 rounded-lg py-4 px-6">
          <h3 className="text-2xl text-[#7E90FE] font-semibold mb-3">
            1. What is a custom hook?
          </h3>
          <p className="leading-8 text-lg text-gray-700">
            A special JavaScript function whose name start 'use' and call
            another hooks.
          </p>
        </div>
        {/* useRef hook  */}
        <div className="bg-gray-200 rounded-lg py-4 px-6">
          <h3 className="text-2xl text-[#7E90FE] font-semibold mb-3">
            3. What is useRef?
          </h3>
          <p className="leading-8 text-lg text-gray-700">
            A built-in React hook that accepts one argument as initial value and
            returns a reference.
          </p>
        </div>
        {/* useMemo hook  */}
        <div className="bg-gray-200 rounded-lg py-4 px-6">
          <h3 className="text-2xl text-[#7E90FE] font-semibold mb-3">
            4. What is useMemo?
          </h3>
          <p className="leading-8 text-lg text-gray-700">
            A built-in React hook that lets you cache the result of a
            calculation between re-renders.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
