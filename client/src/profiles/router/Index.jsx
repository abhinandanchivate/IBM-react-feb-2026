import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateProfile from "../components/forms/CreateProfile";
import AddExpForm from "../components/forms/AddExpForm";

const Index = () => {
  return (
    <Routes>
      <Route path="/create-profile" element={<CreateProfile></CreateProfile>} />
      <Route path="/edit-profile" element={<CreateProfile></CreateProfile>} />
      <Route path="/add-experience" element={<AddExpForm></AddExpForm>} />
    </Routes>
  );
};

export default Index;
