import React from "react";
import { useState } from "react";
import { registerUser } from "../service/auth.service";

const registerFormState = {
  name: "abhi",
  email: "abhi@learnquest.com",
  password: "123456",
  password2: "123456",
}; // initial data for the form

const Register = () => {
  // to hold the data for my form ===> why to hold the data ==> to send the data to the backend and to do some validation on the form data before sending it to the backend.
  // we were having class based components  ===> we are using functional based components.
  // class based ----> we were able to use the state and lifecycle.
  // but now in functional based components we are using hooks to use the state and lifecycle methods.
  // why they have been shifted from class to function ==>
  // base class ---> derived class --> when u will create an object of the derived class then u will have all the contents and methods from base to derive .
  // whether u want to use it or not ---> u will have everything in the derived class.--> objects will have sometimes unwanted data and methods which are not required for the derived class.--> it will make the code more complex and difficult to understand.
  // they want to reduce the memory usage and to improve the performance of ur application.
  // they want to use only relevant things ==> inheritance ==> left the class based approach and shifted to functional based approach.
  // if u want to use the state / content for ur component --> u can use the useState hook.
  // what is hook ? --> functional comp ==> do u have any lifecycle methods from the React --> No
  // do u have any state handling mechanism in functional component --> No
  // now we need to hook it
  // to maintain the state --> useState hook
  // to use the lifecycle methods --> useEffect hook
  // RTK hooks --> useSelector, useDispatch
  // state declaration
  const [registerForm, setRegisterForm] = useState(registerFormState);
  // const [state, setState] = useState(initialState) --> this is the syntax for using the useState hook.
  // state : will hold the data
  // setState : will update the state
  // initialState : initial value for the state

  // event handlers

  // onChange : it is handled by Angular framework but in React we have to handle it by ourselves. ==> to update the / change the value on a field --> criteria for change --> when we ill type something ==> it should call onChange event .
  const onChange = (e) => {
    // will suport all the fields in the form --> name, email, password, password2 + any other field which we will add in the future that might be a dropdown or a checkbox or a radio button.

    const { name, value } = e.target; // destructuring the event object to get the name and value from the input field
    setRegisterForm({ ...registerForm, [name]: value });
    // syntax generic : setState({ ...state, [name]: value })
    // ... state : it will copy all the existing data from the state and then we will update the specific field which is being changed by the user.
    // [name]: name : key for json object
    // value: value for the key which is being updated by the user.
  };
  // onSubmit --> when we will click on the submit button then it should call onSubmit event to perform some actions based on the form data and mostly to send the data to the backend.
  const onSubmit = (e) => {
    e.preventDefault(); // to prevent the default behavior of the form which is to refresh the page when we submit the form.
    console.log("button clicked", registerForm);
    try {
      const res = registerUser(registerForm); // calling the registerUser function to send the data to the backend and to get the response from the backend.
      // res ===> promise object ===> it will have 3 things : pending success(then) and failure(catch)
      // here either success or failure will happen --> we will get the response from the backend and then we will perform some actions based on the response from the backend.
      res
        .then((response) => {
          console.log("response from backend", response.data);
          console.log(response.status);
        })
        .catch((err) => {}); // to get the response from the backend and to perform some actions based on the response from the backend.
      console.log("response from backend");
    } catch (error) {
      console.log(error);
    }
  };
  // destructuring the json object to get the values from the registerForm state
  const { name, email, password, password2 } = registerForm;
  // if I want to use name from my registerForm state ---> registerForm.name
  // if I want to use email from my registerForm state ---> registerForm.email
  // if I want to use password from my registerForm state ---> registerForm.password
  // if I want to use password2 from my registerForm state ---> registerForm.password2
  return (
    <>
      {" "}
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
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={onChange}
              value={email}
            />
            <small class="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChange}
              value={password}
              minLength="6"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={onChange}
              minLength="6"
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Register" />
        </form>
        <p class="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
};

export default Register;
