import React, { useEffect } from "react";
import Profiletop from "./Profiletop";
import About from "./About";
import Exp from "./Exp";
import Edu from "./Edu";
import Github from "./Github";
import { useParams } from "react-router-dom";
import { getProfileByIdAction } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id);
    dispatch(getProfileByIdAction(id));
  }, [dispatch, id]);
  const { profile } = useSelector((state) => state.profile);

  return (
    <>
      {" "}
      {id}
      <section class="container">
        <a href="profiles.html" class="btn btn-light">
          Back To Profiles
        </a>

        <div class="profile-grid my-1">
          {
            "render the props in respective components ? complete the same , will wait for 10 mins."
          }
          <Profiletop profile={profile}></Profiletop>
          <About profile={profile}></About>
          <Exp profile={profile}></Exp>
          <Edu profile={profile}></Edu>
          <Github profile={profile}></Github>
        </div>
      </section>
    </>
  );
};

export default Profile;
