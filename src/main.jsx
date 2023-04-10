import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import JobDetail from "./components/JobDetail/JobDetail";
import { loadAppliedJobData, singleJobDataLoad } from "./utilities/data-load";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Statistics from "./components/Statistics/Statistics";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Blog from "./components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/job/:id",
        element: <JobDetail />,
        loader: ({ params }) => singleJobDataLoad(params.id),
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
        loader: loadAppliedJobData,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
