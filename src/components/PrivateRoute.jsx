import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isAuth, role } = useSelector((store) => store.AuthReducer);
  const location = useLocation();

  if (!isAuth && role !== "user") {
    return <Navigate to="/login" state={{ data: location.pathname }} replace />;
  }
  return children;
};
