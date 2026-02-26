import React from "react";
import ProfileCard from "./ProfileCard";

const Profiles = () => {
  return (
    <>
      {" "}
      <section class="container">
        <h1 class="large text-primary">Developers</h1>
        <p class="lead">
          <i class="fab fa-connectdevelop"></i> Browse and connect with
          developers
        </p>
        <div class="profiles">
          <ProfileCard></ProfileCard>
        </div>
      </section>
    </>
  );
};

export default Profiles;
