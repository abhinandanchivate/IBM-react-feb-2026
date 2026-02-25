import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExperienceAction } from "../../redux/actions";
import { Link } from "react-router-dom";
const expState = {
  title: "",
  company: "",
  location: "",
  from: "",
  to: "",
  current: false,
  description: "",
};
const AddExpForm = () => {
  const dispatch = useDispatch();
  const [formData, setformData] = useState(expState);
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setformData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // can i send formData directly to the action ?
    console.log(formData);
    dispatch(addExperienceAction(formData));
  };
  const { title, company, location, from, to, current, description } = formData;
  return (
    <>
      {" "}
      <section class="container">
        <h1 class="large text-primary">Add An Experience</h1>
        <p class="lead">
          <i class="fas fa-code-branch"></i> Add any developer/programming
          positions that you have had in the past
        </p>
        <small>* = required field</small>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="text"
              placeholder="* Job Title"
              name="title"
              required
              value={title}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="* Company"
              name="company"
              required
              value={company}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <h4>From Date</h4>
            <input type="date" name="from" value={from} onChange={onChange} />
          </div>
          <div class="form-group">
            <p>
              <input
                type="checkbox"
                name="current"
                value=""
                checked={current}
                onChange={onChange}
              />{" "}
              Current Job
            </p>
          </div>
          <div class="form-group">
            <h4>To Date</h4>
            <input type="date" name="to" value={to} onChange={onChange} />
          </div>
          <div class="form-group">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Job Description"
              value={description}
              onChange={onChange}
            ></textarea>
          </div>
          <input type="submit" class="btn btn-primary my-1" />
          <Link to="/dashboard" class="btn btn-light my-1">
            Go Back
          </Link>
        </form>
      </section>
    </>
  );
};

export default AddExpForm;

// 5 mins --> pls complete add education..
