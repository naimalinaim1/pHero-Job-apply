import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-center flex flex-col  justify-center h-[90vh]">
      <h1 className="text-5xl font-bold">Oops!</h1>
      <p className="mt-6 text-red-500 text-xl">{error.data}</p>
      <p className="text-xl">{error.statusText || error.message}</p>
      <Link to="/">
        <button className="mt-8 bg-red-500 w-36 mx-auto p-4 text-xl text-white rounded-full">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
