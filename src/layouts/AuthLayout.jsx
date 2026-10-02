import React from "react";
import LoginPage from "../pages/LoginPage";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
