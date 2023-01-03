import React, { useContext } from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";

import { authContext } from "../../../context/AuthContext";

const UnProtected = () => {
  const location = useLocation();
  const authCtx = useContext(authContext);
  const { isAuthenticated } = authCtx;

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="lilies/dashboard" state={{ from: location }} />
  );
};

export default UnProtected;
