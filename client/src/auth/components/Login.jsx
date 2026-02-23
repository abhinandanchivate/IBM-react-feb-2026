import React, { useState } from "react";
import { useDispatch } from "react-redux";

const loginFormState = {
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(loginFormState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch();
  };
  const { email, password } = formData;
  return (
    <>
      {" "}
      <section class="container">
        <h1 class="large text-primary">Sign In</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Sign into Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Login" />
        </form>
        <p class="my-1">
          Don't have an account? <a href="register.html">Sign Up</a>
        </p>
      </section>
    </>
  );
};

export default Login;
