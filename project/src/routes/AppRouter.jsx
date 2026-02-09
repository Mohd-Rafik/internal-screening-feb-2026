import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

/* Layouts */
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

/* Auth Pages */
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ForgotPassword from "../pages/auth/Forgot_Password";

/* Dashboard Pages */
import Dashboard from "../pages/dashboard/Dashboard";
import Courses from "../pages/dashboard/Courses";
import Schedule from "../pages/dashboard/Schedule";
import Instructors from "../pages/dashboard/Instructors";
import Profile from "../pages/dashboard/Profile";
import Activity from "../pages/dashboard/Activity";
import ComingSoon from"../components/ComingSoon"

/* Router */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      /* Default Redirect */
      {
        index: true,
        element: <Navigate to="/sign-in" replace />,
      },

      /* ========== AUTH ROUTES ========== */
      {
        element: <AuthLayout />,
        children: [
          {
            path: "sign-in",
            element: <SignIn />,
          },
          {
            path: "sign-up",
            element: <SignUp />,
          },
          {
            path: "forgot-password",
            element: <ComingSoon/>,
          },
        ],
      },

      /* ========== DASHBOARD ROUTES ========== */
      {
        path: "dashboard",
        element: <DashboardLayout />,

        children: [
          /* Default dashboard page */
          {
            index: true,
            element: <Dashboard />,
          },

          {
            path: "courses",
            element: <ComingSoon  />,
          },
          {
            path: "schedule",
            element: <ComingSoon />,
          },
          {
            path: "instructors",
            element: <ComingSoon />,
          },
          {
            path: "profile",
            element: <ComingSoon  />,
          },
          {
            path: "activity",
            element: <ComingSoon 
          
            />,
          },
        ],
      },
    ],
  },
]);
