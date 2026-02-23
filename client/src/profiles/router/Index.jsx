import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateProfile from "../components/forms/CreateProfile";

const Index = () => {
  return (
    <Routes>
      <Route path="/create-profile" element={<CreateProfile></CreateProfile>} />
    </Routes>
  );
};

export default Index;
