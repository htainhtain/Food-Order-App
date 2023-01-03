import React, { useContext } from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";

import { authContext } from "../../../context/AuthContext";

const Protected = () => {
  const location = useLocation();

  const authCtx = useContext(authContext);
  const { isAuthenticated } = authCtx;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="auth/login" state={{ from: location }} />
  );
};

export default Protected;
