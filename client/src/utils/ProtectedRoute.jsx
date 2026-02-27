import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  // use selector auth
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate("/auth/login");

  if (loading) {
    return <>Loading....</>;
  }
  console.log(isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/auth/login"></Navigate>;
  // navigate hook ---> i should use navigate component since we are dealing with return statement.
};

export default ProtectedRoute;
