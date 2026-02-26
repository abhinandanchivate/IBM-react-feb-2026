import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ appName }) => {
  // const { appName } = props;
  // destructured the props object
  // whatever the props u need it then we should access them via prop object --> where to declare the props object --> in the parameter of the function component.
  return (
    <>
      {" "}
      <nav class="navbar bg-dark">
        <h1>
          <Link to="/">
            <i class="fas fa-code"></i> {appName}
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/profile/all">Developers</Link>
          </li>
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
