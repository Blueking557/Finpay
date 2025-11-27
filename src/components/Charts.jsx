import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 26 },
  { month: "Mar", value: 32 },
  { month: "Apr", value: 38},
  { month: "May", value: 42 },
  { month: "Jun", value: 47},
  { month: "Jul", value: 53 },
];

export default function Chart() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <defs>
           <linearGradient id="fullGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#288894" stopOpacity={0.9} />
            <stop offset="100%" stopColor="white" stopOpacity={0.1} />
           </linearGradient>
          </defs>


          <Area
            type="monotone"
            dataKey="value"
            stroke="#288894"
            strokeWidth={3}
            fill="url(#fullGradient)"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

