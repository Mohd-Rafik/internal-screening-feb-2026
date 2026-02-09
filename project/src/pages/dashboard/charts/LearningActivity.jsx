import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

import data from "../../../Data/Data"; // ✅ Import

export default function LearningActivityChart() {

  const chartData = data.chart;

  return (
    <div className="learning-card">

      {/* Header */}
      <div className="chart-header">
        <h3>Learning Activity</h3>

        <div className="legend">
          <span className="dot yellow"></span> Last Month
          <span className="dot green"></span> This Month
        </div>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 295 }}>
        <ResponsiveContainer>
          <AreaChart data={chartData}>

            <defs>
              <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="week" />
            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="lastMonth"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={{ r: 5 }}
            />

            <Area
              type="monotone"
              dataKey="thisMonth"
              stroke="#22c55e"
              strokeWidth={3}
              fill="url(#green)"
              dot={{ r: 5 }}
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
