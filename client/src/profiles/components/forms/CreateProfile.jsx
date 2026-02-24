import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProfileAction } from "../../redux/actions";
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
  return (
    <>
      {" "}
      <section class="container">
        <h1 class="large text-primary">Create Your Profile</h1>
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
            <button type="button" class="btn btn-light">
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>

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
          <input type="submit" class="btn btn-primary my-1" />
          <a class="btn btn-light my-1" href="dashboard.html">
            Go Back
          </a>
        </form>
      </section>
    </>
  );
};

export default CreateProfile;
