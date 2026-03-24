import React from "react";
import { useState } from "react";
import { loginService } from "../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../rtk/auth.action";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { isAuthenticated } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(form));
    // const res = loginService(form);
    // res
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
  };
  const { email, password } = form;
  return (
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
            required
            value={email}
            onChange={onChange}
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
      </form>
      <p class="my-1">
        Don't have an account? <a href="register.html">Sign Up</a>
      </p>
    </section>
  );
};

export default Login;
