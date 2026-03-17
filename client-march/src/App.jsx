import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./shared/core/components/layouts/Navbar";
import Landing from "./shared/core/components/layouts/Landing";
import Footer from "./shared/core/components/layouts/Footer";
import RootRouter from "./RootRouter";

// this component is used to wire / bundle the application basic building components.

function App() {
  return (
    <>
      <Navbar></Navbar>
      <RootRouter></RootRouter>
      <Footer></Footer>
    </>
  );
  // ur return statement will hold only one element ===> will carry the rendering content.
  // one element : div, section , article , header, ===> we can use the elements.
}

export default App;
