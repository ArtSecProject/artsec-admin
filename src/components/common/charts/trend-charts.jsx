
import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    weeks: "1d",
    trend: 300,
  },
  {
    weeks: "2d",
    trend: 4300,
  },
  {
    weeks: "3d",
    trend: 4300,

  },
  {
    weeks: "1w",
    trend: 4300,

  },
  {
    weeks: "2w",
    trend: 4300,
  },
  {
    weeks: "3w",
    trend: 4300,
  },
  {
    weeks: "4w",
    trend: 4300,
  },
  {
    weeks: "1m",
    trend: 1010,
  },
  {
    weeks: "2m",
    trend: 4300,
  },
  {
    weeks: "3m",
    trend: 4300,
  },
  {
    weeks: "4m",
    trend: 4300,
  },
  {
    weeks: "6m",
    trend: 4300,
  },
];



const TrendChart = () => {
  

  return (
    <ResponsiveContainer width="100%"   aspect={3}>
      <LineChart data={data}>
        <XAxis dataKey="weeks" stroke="#4B006E" />
        <YAxis stroke="#4B006E"  />
        <Tooltip stroke="#4B006E"/>
        <Line
          type="linear"
          dataKey="trend"
          stroke="#4B006E"
          // activeDot={{ r: 8 }}
          width="100%"
        />
        {/* <Line type="monotone" dataKey="past" stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TrendChart
