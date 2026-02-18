// we will hold complete app routing module wise.
// module wise : every module will have its own routing and we will import it here and add it to the main app routing
// react : everything is a component.

import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./core/components/layouts/Landing";
// Routes : its a wrapper component for all your routes that we will declare to render the component based on the url path.
// Route : its a component that will render the component based on the url matching at tthe runtime .
import AuthRouter from "./auth/router/Index";
const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/*" element={<AuthRouter />} />
      </Routes>
    </>
  );
};

export default RootRouter;
