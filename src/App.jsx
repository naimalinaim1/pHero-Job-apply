import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="w-[96%] max-w-[1280px] mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default App;
