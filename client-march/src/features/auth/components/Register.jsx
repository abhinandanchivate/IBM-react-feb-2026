import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerService } from "../services/auth.service";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../rtk/auth.action";

// whenever we want to initialize the state we will declare the details to initialize the state outside.
const formState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};
const Register = () => {
  // from RTK we need a dispatch ==> will be async and it is connected with middleware.
  const dispatch = useDispatch();
  // in react we do have a hook called useNavigate
  const navigate = useNavigate();
  // to hold the data ==> state
  const [errors, setErrors] = useState([]);
  // declared a state called errors : will hold []
  const [form, setForm] = useState(formState);
  // state data is immutable in nature ===> but we can change the state data via setXXX function.
  // const : can't change the value
  // form : its a name of the state
  // setform : is used to cahgne / update / modify the value of form state.
  // useState : its a hook which is used to create the state in functional component..
  // for the hooks the generic syntax for user defined and predefined ==> useXXX where XXX is the name of the hook and it will be always in camel case.
  // second : initial value .
  const onChange = (e) => {
    // from this event e object we need to extract the name and value part
    // we will use the value to update / modify our state via setter method.setXXX : XXX is the name of the state..
    const { name, value } = e.target; // destructuring.
    // e.target: it will refer to the input field which is currently used to change the value / operated.
    setForm({ ...form, [name]: value });
    // setForm({ ...form, name: value });
    // setForm({...form, email: value });
    // setForm({ ...form, password: value });
    // setForm({ ...form, password2: value });
    // setForm : is the method to update / modify the state object.
    // form : our state object
    // ...form: we need to understand the concept of ... (spread operator).
  };
  // const onSubmit = (e) => {
  //   // we need to print hte details of the form in console.
  //   // to prevent the default behaviour of the form submission.
  //   e.preventDefault();
  //   console.log(form);

  //   const res = registerService(form);
  //   // can we predict that rest call is succefull or not ? ===> no we can't predict the rest call is successful or not because it is asynchronous in nature.
  //   res // then method : success part
  //     .then((result) => {
  //       console.log(result);
  //       navigate("/dashboard");
  //     })
  //     .catch((error) => {
  //       // catch : error part
  //       console.log("inside the catch ");
  //       console.log(error.response.data.errors);
  //       // extract message and path and form the error array and assign it to the error state.
  //       // temp array then array content -==> copy to set error. ==> performance
  //       // direct. ==> changes must be applied to the errors state.

  //       error.response.data.errors.forEach((err) => {
  //         console.log({ msg: err.msg, field: err.path });
  //         setErrors((prev) => [...prev, { msg: err.msg, field: err.path }]);
  //         // prev: arg which will hold the previous value of the state.
  //         // ...prev: ur previous error array content / state content
  //         // {msg, field} : new error object which we are getting from the backend for each error.
  //       });
  //     });
  // };
  // name
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserAction(form));
  };
  const { name, email, password, password2 } = form;

  return (
    <section class="container">
      <h1 class="large text-primary">Sign Up</h1>
      <p class="lead">
        <i class="fas fa-user"></i> Create Your Account
      </p>
      <form class="form" onSubmit={onSubmit}>
        <div class="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            className={`form-control ${
              errors.find((err) => err.field === "name") ? "is-invalid" : ""
            }`}
          />
          <div className="d-block invalid-feedback">
            {errors.find((err) => err.field === "name")?.msg}
          </div>
        </div>
        <div class="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            className={`form-control ${
              errors.find((err) => err.field === "email") ? "is-invalid" : ""
            }`}
          />
          <small class="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
          <div className="d-block invalid-feedback">
            {errors.find((err) => err.field === "email")?.msg}
          </div>
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={onChange}
            className={`form-control ${
              errors.find((err) => err.field === "password") ? "is-invalid" : ""
            }`}
          />
          <div className="d-block invalid-feedback">
            {errors.find((err) => err.field === "password")?.msg}
          </div>
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </form>
      <p class="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </section>
  );
};

export default Register;
