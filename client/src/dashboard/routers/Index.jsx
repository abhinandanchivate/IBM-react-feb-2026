import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import ProtectedRoute from "../../utils/ProtectedRoute";

const Index = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard></Dashboard>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Index;
