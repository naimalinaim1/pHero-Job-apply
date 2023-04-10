import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  // redirect job apply
  const navigate = useNavigate();
  const getStartApplying = () => navigate("/start-apply");

  return (
    <nav className="w-[96%] max-w-[1280px] mx-auto mt-8 mb-12 text-center  sm:flex justify-between items-center">
      <Link to="/">
        <h2 className="text-3xl hover:text-[#7E90FE] font-semibold mb-6 sm:mb-0">
          pHero
        </h2>
      </Link>
      <ul className="space-y-3 sm:space-y-0 mb-6 sm:mb-0 sm:flex gap-8 text-md font-semibold text-gray-500">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            Statistics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/applied-jobs"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            Applied Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <button
        onClick={getStartApplying}
        className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-3 rounded-lg text-white text-md font-semibold"
      >
        Start Applying
      </button>
    </nav>
  );
};

export default NavBar;
