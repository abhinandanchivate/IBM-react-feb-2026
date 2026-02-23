import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfileAction } from "../../profiles/router/redux/actions";

const Dashboard = () => {
  // when that action needs to be called ? --> when user is successfully logged in or registered then we need to navigate to the dashboard page.---> it should call the action during the loading of dashboard page / component.
  // anything from store
  const { profile, loading, error } = useSelector((state) => state.profile); // to get the profile data from the store which is coming from the backend in the response of the api call.
  // useSelector : it will help us to connect to the store to get the data from profile part from the app state.
  const { isAuthenticated } = useSelector((state) => state.auth); // to get the isAuthenticated data from the store which is coming from the backend in the response of the api call.
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
      <div class="dash-buttons">
        <a href="create-profile.html" class="btn btn-light">
          <i class="fas fa-user-circle text-primary"></i> Edit Profile
        </a>
        <a href="add-experience.html" class="btn btn-light">
          <i class="fab fa-black-tie text-primary"></i> Add Experience
        </a>
        <a href="add-education.html" class="btn btn-light">
          <i class="fas fa-graduation-cap text-primary"></i> Add Education
        </a>
      </div>
      <h2 class="my-2">Experience Credentials</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Company</th>
            <th class="hide-sm">Title</th>
            <th class="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tech Guy Web Solutions</td>
            <td class="hide-sm">Senior Developer</td>
            <td class="hide-sm">02-03-2009 - 01-02-2014</td>
            <td>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Traversy Media</td>
            <td class="hide-sm">Instructor & Developer</td>
            <td class="hide-sm">02-03-2015 - Now</td>
            <td>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 class="my-2">Education Credentials</h2>
      <table class="table">
        <thead>
          <tr>
            <th>School</th>
            <th class="hide-sm">Degree</th>
            <th class="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Northern Essex</td>
            <td class="hide-sm">Associates</td>
            <td class="hide-sm">02-03-2007 - 01-02-2009</td>
            <td>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
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
          <i class="fas fa-user"></i> Welcome John Doe
        </p>
        {error && error.msg === "There is no profile for this user" ? (
          <button class="btn btn-danger">
            <i class="fas fa-user-minus"></i>
            Create My Account
          </button>
        ) : (
          profileData
        )}
      </section>
    </>
  );
};

export default Dashboard;
