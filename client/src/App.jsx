import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./core/components/layouts/Navbar";
import Landing from "./core/components/layouts/Landing";
import Footer from "./core/components/layouts/Footer";
import RootRouter from "./RootRouter";

function App() {
  // this return will render the the jsx code / to the UI.
  // it has ur declartive stuff where we can have html + js code (declarative manner) and it will be converted to the js code by the babel compiler and then it will be rendered to the UI.
  // <> </> is a react fragment ==> used to wrap the multiple element without adding any extra element / node to the DOM.

  return (
    <>
      <Navbar />
      <RootRouter />
      <Footer />
    </>
  );
}

export default App;
