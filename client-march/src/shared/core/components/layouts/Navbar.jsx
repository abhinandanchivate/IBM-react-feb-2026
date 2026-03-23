import React from "react";
import { Link } from "react-router-dom";
import Test from "./Test";

const Navbar = ({ appName }) => {
  return (
    <nav class="navbar bg-dark">
      <Test appName={appName}></Test>
      <h1>
        <Link to="/">
          <i class="fas fa-code"></i> {appName}
        </Link>
      </h1>
      <ul>
        <li>
          <a href="profiles.html">Developers</a>
        </li>
        <li>
          <Link to="/auth/register">Register</Link>
        </li>
        <li>
          <Link to="/auth/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
