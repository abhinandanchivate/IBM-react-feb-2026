import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../auth/redux/slices";
import useAuth from "../../hooks/UseAuth";

const Navbar = ({ appName }) => {
  // const { appName } = props;
  // destructured the props object
  // whatever the props u need it then we should access them via prop object --> where to declare the props object --> in the parameter of the function component.
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const { isAuthenticated, logoutUser } = useAuth();
  const guestLink = (
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
  );
  // const dispatch = useDispatch();
  // const handleLogout = () => {
  //   dispatch(logout());
  // };
  const logoutLink = (
    <ul>
      <li>
        <button onClick={logoutUser}>Logout</button>
      </li>
    </ul>
  );

  return (
    <>
      {" "}
      <nav class="navbar bg-dark">
        <h1>
          <Link to="/">
            <i class="fas fa-code"></i> {appName}
          </Link>
          {isAuthenticated ? logoutLink : guestLink}
        </h1>
      </nav>
    </>
  );
};

export default Navbar;
