import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ profile }) => {
  return (
    <>
      {" "}
      <div class="profile bg-light">
        <img
          class="round-img"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          alt=""
        />
        <div>
          <h2>{profile?.user.name}</h2>
          <p>{profile?.title}</p>
          <p>{profile?.location}</p>
          <Link to={`/profile/${profile?.user._id}`} class="btn btn-primary">
            View Profile
          </Link>
        </div>

        <ul>
          // handle skills array here
          {profile?.skills.map((skill, index) => (
            <li key={index} class="text-primary">
              <i class="fas fa-check"></i> {skill}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProfileCard;
