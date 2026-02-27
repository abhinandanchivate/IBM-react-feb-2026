import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateProfile from "../components/forms/CreateProfile";
import AddExpForm from "../components/forms/AddExpForm";
import Profiles from "../components/pages/Profiles";
import Profile from "../components/pages/current-profile/Profile";
import ProtectedRoute from "../../utils/ProtectedRoute";

const Index = () => {
  return (
    <Routes>
      <Route
        path="/create-profile"
        element={
          <ProtectedRoute>
            <CreateProfile></CreateProfile>
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-profile"
        element={
          <ProtectedRoute>
            <CreateProfile></CreateProfile>
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-experience"
        element={
          <ProtectedRoute>
            <AddExpForm></AddExpForm>
          </ProtectedRoute>
        }
      />
      <Route path="/all" element={<Profiles></Profiles>} />
      <Route path="/:id" element={<Profile></Profile>} />
    </Routes>
  );
};

export default Index;
