import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

export const CommonBtn = createContext("");
const btn = {
  background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)",
};

const App = () => {
  return (
    <>
      <CommonBtn.Provider value={btn}>
        <NavBar />
        <Outlet />
      </CommonBtn.Provider>
    </>
  );
};

export default App;
