import React, { createContext, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

export const JobData = createContext();

const App = () => {
  const allJobData = useLoaderData();

  return (
    <>
      <NavBar />
      <JobData.Provider value={allJobData}>
        <main className="w-[96%] max-w-[1280px] mx-auto">
          <Outlet />
        </main>
      </JobData.Provider>
    </>
  );
};

export default App;
