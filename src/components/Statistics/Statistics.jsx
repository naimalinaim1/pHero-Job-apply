import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    { name: "Assignment 1", uv: 60 },
    { name: "Assignment 2", uv: 58 },
    { name: "Assignment 3", uv: 60 },
    { name: "Assignment 4", uv: 60 },
    { name: "Assignment 5", uv: 60 },
    { name: "Assignment 6", uv: 58 },
    { name: "Assignment 7", uv: 60 },
  ];
  return (
    <section className="flex justify-center mt-36">
      <ComposedChart width={500} height={200} data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" barSize={30} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </section>
  );
};

export default Statistics;
