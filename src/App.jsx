import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="w-[96%] max-w-[1280px] mx-auto min-h-[90vh] mb-10">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
