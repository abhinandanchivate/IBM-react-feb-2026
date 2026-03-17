import React from "react";
//rafce
const Landing = () => {
  return (
    <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">Developer Connector</h1>
          <p class="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div class="buttons">
            <a href="register.html" class="btn btn-primary">
              Sign Up
            </a>
            <a href="login.html" class="btn btn-light">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

// Smart and Dumb Components
// more dumb : rendering UI, no state, no logic, just props(data) and callbacks (functions)
// why callback functions : lambda functions ===> have u passed lambda fuctions as an arg ==> when u will pass a function as an arg to a function then it will be called callback function in js.
// response over the submit or any onchange events ==> everycomp may react in diff way ==> to map the same we will pass callbacks to the dumb comp ==> to handle the events .
