import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfileAction } from "../../profiles/redux/actions";
import { Link } from "react-router-dom";
import DashboardAction from "./DashboardAction";
import Experience from "./Experience";
import Education from "./Education";
import { loadUserAction } from "../../auth/redux/actions/auth.action";

const Dashboard = () => {
  // when that action needs to be called ? --> when user is successfully logged in or registered then we need to navigate to the dashboard page.---> it should call the action during the loading of dashboard page / component.
  // anything from store
  const { profile, loading, error } = useSelector((state) => state.profile); // to get the profile data from the store which is coming from the backend in the response of the api call.
  // useSelector : it will help us to connect to the store to get the data from profile part from the app state.
  const { isAuthenticated, user } = useSelector((state) => state.auth); // to get the isAuthenticated data from the store which is coming from the backend in the response of the api call.
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentProfileAction());
  }, []); // we will have 3 formats of useEffect
  // 1. useEffect with empty dependency array --> it will run only once when the component is mounted and it will not run again when the component is updated or unmounted.
  // 2. useEffect with dependency array --> it will run when the component is mounted and it will run again when the component is updated or unmounted based on the dependencies which we will pass in the dependency array.
  // 3. useEffect without dependency array --> how many time it will be called ? -->  only once when the component is rendered if ur component is rendered 10 time s then ti will be caleld 10 time ? it will be called every time when the component is updated or re-rendered. --> it will cause performance issues in our application if we are not careful while using it.
  // in our case we need to call the action only once when the component is mounted and we don't want to call it again when the component is updated or unmounted. --> so we will use the first format of useEffect with empty dependency array.
  // which one we need to use ? --> show the syntax :
  // useEffect(() => {
  //   // code to be executed when the component is mounted
  // }, []); // empty dependency array
  const profileData = (
    <>
      {" "}
      <DashboardAction />
      <Experience exps={profile?.experience} /> it prevents null
      <Education />
      <div class="my-2">
        <button class="btn btn-danger">
          <i class="fas fa-user-minus"></i>
          Delete My Account
        </button>
      </div>
    </>
  );
  return (
    <>
      {" "}
      <section class="container">
        <h1 class="large text-primary">Dashboard</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Welcome {user?.name}
        </p>
        {error && error.msg === "There is no profile for this user" ? (
          <Link to="/profile/create-profile" class="btn btn-danger">
            <i class="fas fa-user-minus"></i>
            Create My Account
          </Link>
        ) : (
          profileData
        )}
      </section>
    </>
  );
};

export default Dashboard;
