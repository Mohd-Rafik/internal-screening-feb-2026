import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBookOpen,
  FaCalendarAlt,
  FaUserGraduate,
  FaChartLine,
  FaTimes,
} from "react-icons/fa";
import img from "../assets/icons/MaxSkills.png";

export default function Sidebar({ closeSidebar }) {
  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <h3 className="logo">
          <img src={img} alt="logo" />
        </h3>

        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

    
      <ul className="menu">
        <li>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaHome /> Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/courses"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaBookOpen /> Courses
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/schedule"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaCalendarAlt /> Schedule
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/instructors"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUserGraduate /> Instructors
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/activity"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaChartLine /> Activity
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
