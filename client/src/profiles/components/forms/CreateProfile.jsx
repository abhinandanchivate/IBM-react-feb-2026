import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProfileAction,
  getCurrentProfileAction,
} from "../../redux/actions";
import { Link, useMatch } from "react-router-dom";
const profileState = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  githubusername: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
};

const CreateProfile = () => {
  // do we have action ready ? yes
  // are we following create / update path ? here we need to take a decision
  // we have to use a hook
  // useMatch --> to check whether we are in create profile path or update profile path

  const isCreate = Boolean(useMatch("/profile/create-profile"));
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(profileState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // can i send formData directly to the action ?
    // No --> formData json strucutrre is diff from the data which is expected by the backend
    /*
    {
        "company": "TechNova Solutions",
        "website": "https://technova.com",
        "location": "Pune, India",
        "status": "Senior Backend Developer",
        "skills": [
          "Java",
          "Spring Boot",
          "React",
          "MongoDB",
          "Docker"
        ],
        "bio": "Passionate backend engineer building scalable payment systems.",
        "githubusername": "abhi-dev",
        
        ],
       
          "youtube": "https://youtube.com/@abhitech",
          "twitter": "https://twitter.com/abhidev",
          "facebook": "https://facebook.com/abhidev",
          "linkedin": "https://linkedin.com/in/abhidev",
          "instagram": "https://instagram.com/abhidev"
        
      }
    * */
    // we need to convert the skills string --> array of strings
    const skillsArray = formData.skills.split(",").map((skill) => skill.trim());

    const profileData = { ...formData, skills: skillsArray };
    console.log(profileData);
    dispatch(createProfileAction(profileData));
  };

  // do we have any data connection from the store ? : No
  // we should use useSelector hook to get the data from the store.
  const { profile } = useSelector((state) => state.profile); // to get the profile data from the store which is coming from the backend in the response of the api call.
  // useEffect to load the existing profile data when we are in the edit profile part
  useEffect(() => {
    if (!isCreate)
      // when we have edit --> false --> !false --> true
      dispatch(getCurrentProfileAction());
  }, [dispatch, isCreate]); // we will call the getCurrentProfileAction only when the component is mounted and when we are in the edit profile part.
  useEffect(() => {
    if (!profile) return;
    setFormData({
      ...formData,
      ...profile,
      ...profile.social,
      skills: Array.isArray(profile.skills) ? profile.skills.join(",") : "",
    });
    // store profile data -=--> form data state.
  }, [profile]); // when we will get the profile data from the store then we will set the profile data in the formData state to show the existing data in the form fields when we are in the edit profile part.

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;
  // to show or hide the social links fields --> we need to maintain a state for it
  const [displaySocialLinks, setDisplaySocialLinks] = useState(false);
  const socialLinks = (
    <>
      <div class="form-group social-input">
        <i class="fab fa-twitter fa-2x"></i>
        <input
          type="text"
          placeholder="Twitter URL"
          name="twitter"
          onChange={onChange}
          value={twitter}
        />
      </div>
      <div class="form-group social-input">
        <i class="fab fa-facebook fa-2x"></i>
        <input
          type="text"
          placeholder="Facebook URL"
          name="facebook"
          onChange={onChange}
          value={facebook}
        />
      </div>
      <div class="form-group social-input">
        <i class="fab fa-youtube fa-2x"></i>
        <input
          type="text"
          placeholder="YouTube URL"
          name="youtube"
          onChange={onChange}
          value={youtube}
        />
      </div>
      <div class="form-group social-input">
        <i class="fab fa-linkedin fa-2x"></i>
        <input
          type="text"
          placeholder="Linkedin URL"
          name="linkedin"
          onChange={onChange}
          value={linkedin}
        />
      </div>
      <div class="form-group social-input">
        <i class="fab fa-instagram fa-2x"></i>
        <input
          type="text"
          placeholder="Instagram URL"
          name="instagram"
          onChange={onChange}
          value={instagram}
        />
      </div>
    </>
  );
  return (
    <>
      {" "}
      <section class="container">
        <h1 class="large text-primary">
          {isCreate ? "Create" : "Edit"} Your Profile
        </h1>
        <p class="lead">
          <i class="fas fa-user"></i> Let's get some information to make your
          profile stand out
        </p>
        <small>* = required field</small>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <select name="status" onChange={onChange} value={status}>
              <option value="0">* Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <small class="form-text">
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="Company"
              name="company"
              onChange={onChange}
              value={company}
            />
            <small class="form-text">
              Could be your own company or one you work for
            </small>
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="Website"
              name="website"
              onChange={onChange}
              value={website}
            />
            <small class="form-text">
              Could be your own or a company website
            </small>
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              onChange={onChange}
              value={location}
            />
            <small class="form-text">
              City & state suggested (eg. Boston, MA)
            </small>
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="* Skills"
              name="skills"
              onChange={onChange}
              value={skills}
            />
            <small class="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="Github Username"
              name="githubusername"
              onChange={onChange}
              value={githubusername}
            />
            <small class="form-text">
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div class="form-group">
            <textarea
              placeholder="A short bio of yourself"
              name="bio"
              onChange={onChange}
              value={bio}
            ></textarea>
            <small class="form-text">Tell us a little about yourself</small>
          </div>

          <div class="my-2">
            <button
              type="button"
              class="btn btn-light"
              onClick={() => setDisplaySocialLinks(!displaySocialLinks)}
            >
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>
          {displaySocialLinks && socialLinks}

          <input type="submit" class="btn btn-primary my-1" />
          <Link to="/dashboard" class="btn btn-light my-1">
            Go Back
          </Link>
        </form>
      </section>
    </>
  );
};

export default CreateProfile;
