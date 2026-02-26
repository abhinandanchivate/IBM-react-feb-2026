import React, { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfilesAction } from "../../redux/actions";

const Profiles = () => {
  const dispatch = useDispatch();
  // while loading the component --> useEffect

  useEffect(() => {
    dispatch(getAllProfilesAction());
  }, [dispatch]);

  const { profiles } = useSelector((state) => state.profile);
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
          {profiles.map(
            (profile) => (
              console.log(profile),
              (<ProfileCard key={profile._id} profile={profile}></ProfileCard>)
            ),
          )}
          <ProfileCard></ProfileCard>
        </div>
      </section>
    </>
  );
};

export default Profiles;
