import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard></Dashboard>} />
    </Routes>
  );
};

export default Index;
