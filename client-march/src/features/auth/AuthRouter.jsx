import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/register" element={<Register></Register>} />
    </Routes>
  );
};

export default AuthRouter;
// purpose : it will hold the routings related to auth . login, register etc.
// switch case : exp(path)  muliple cases path mentioned in the route
