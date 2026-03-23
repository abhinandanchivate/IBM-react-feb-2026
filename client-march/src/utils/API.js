// we need to set the axios object for our application to per form the API calls.

import axios from "axios";

const API = axios.create({
  baseURL: "/api", // who will give me the http://localhost:9500 ==> this part will be given or appended by the vite server proxy configuration directly.
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API; // it will have by default : base URL, timeout, headers. we can use this API object to perform the API calls in our application. one time activity that we have done  it.
