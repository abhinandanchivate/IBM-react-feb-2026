import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateProfile from "../components/forms/CreateProfile";
import AddExpForm from "../components/forms/AddExpForm";
import Profiles from "../components/pages/Profiles";

const Index = () => {
  return (
    <Routes>
      <Route path="/create-profile" element={<CreateProfile></CreateProfile>} />
      <Route path="/edit-profile" element={<CreateProfile></CreateProfile>} />
      <Route path="/add-experience" element={<AddExpForm></AddExpForm>} />
      <Route path="/all" element={<Profiles></Profiles>} />
    </Routes>
  );
};

export default Index;
