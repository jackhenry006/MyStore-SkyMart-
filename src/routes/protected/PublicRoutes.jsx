import React from "react";
import { Navigate, Outlet } from "react-router";

const PublicRoutes = () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    return <Navigate to="/main" replace />;
  }

  return <Outlet />;
};

export default PublicRoutes;
