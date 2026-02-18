// rest calls
import axios from "axios";

const API = axios.create({
  baseURL: "/api", // base url for all the api calls --> i will use the proxy --> can anyone predict the base url for all the api calls --> http://localhost:5000/api ---> NO.
  timeout: 3000, // 3 seconds --> if the api call is taking more than 3 seconds then it will throw an error.
  headers: {
    "Content-Type": "application/json", // to specify the content type of the request body which is being sent to the backend. ---> it will hold common headers specs.
  },
}); // axios instance --> will respect base url, timeout and headers for all the api calls which we will make using this instance.

export default API;
