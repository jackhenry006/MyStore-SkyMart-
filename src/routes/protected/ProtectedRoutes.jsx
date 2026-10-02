import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const loggedInUser = localStorage.getItem("loggedInUser");

  if (!loggedInUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
