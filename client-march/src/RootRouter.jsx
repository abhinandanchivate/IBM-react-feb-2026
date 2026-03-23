// in react everything is component.  ==> service work, routing anything is component in react.
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./shared/core/components/layouts/Landing";
import AuthRouter from "./features/auth/AuthRouter";
import DashboardRouter from "./features/dashboard/DashboardRouter";

// Routes : it will be holder to hold complete application routing for us.
// Route : it will be used to handle the routing for component / our module.
const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing></Landing>} />
      <Route path="/auth/*" element={<AuthRouter></AuthRouter>} />
      <Route
        path="/dashboard/*"
        element={<DashboardRouter></DashboardRouter>}
      ></Route>
    </Routes>
  );
};
// ur main page / home page.

export default RootRouter;
// to design the root router : a lib called react router .
