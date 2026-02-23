// we will hold complete app routing module wise.
// module wise : every module will have its own routing and we will import it here and add it to the main app routing
// react : everything is a component.

import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./core/components/layouts/Landing";
// Routes : its a wrapper component for all your routes that we will declare to render the component based on the url path.
// Route : its a component that will render the component based on the url matching at tthe runtime .
import AuthRouter from "./auth/router/Index";
import DashboardRouter from "./dashboard/routers/Index";
import ProfileRouter from "./profiles/router/Index";
const RootRouter = ({ appName }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing appName={appName} />} />
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/dashboard/*" element={<DashboardRouter />} />
        <Route path="/profile/*" element={<ProfileRouter />} />
      </Routes>
    </>
  );
};
// 100s components  : ? ---> will it increase the complexity of the app to share the data between the components ?
// since they can share the data between parents and child component.

export default RootRouter;
