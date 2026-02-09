import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

import { Form } from "react-bootstrap";
import data from "../../../Data/Data";
// import "../../../assets/Saas/_dashbord.scss";

const ScoreActivity = () => {

  // 🔹 Default Year
  const [year, setYear] = useState("2025");

  // 🔹 Year wise data binding
  const chartData = data?.ScoreActivity?.[year] || [];

  return (
    <div className="score-activity-card">

      {/* HEADER */}
      <div className="card-header d-flex justify-content-between align-items-center">

        <h4>Score Activity</h4>

        <div className="d-flex align-items-center gap-3">

          {/* Legend */}
          <div className="legend">
            <span className="dot yellow"></span> Last Month
            <span className="dot green"></span> This Month
          </div>

          {/* Year Dropdown */}
          <Form.Select
            size="sm"
            className="year-dropdown"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            {Object.keys(data.ScoreActivity).map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </Form.Select>

        </div>
      </div>

      {/* CHART */}
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={chartData} barGap={8}>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />

            <Tooltip
              contentStyle={{
                background: "#2f3b52",
                border: "none",
                borderRadius: "10px",
                color: "#fff"
              }}
            />

            <Bar
              dataKey="lastMonth"
              radius={[6, 6, 0, 0]}
              className="bar-yellow"
            />

            <Bar
              dataKey="thisMonth"
              radius={[6, 6, 0, 0]}
              className="bar-green"
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default ScoreActivity;
