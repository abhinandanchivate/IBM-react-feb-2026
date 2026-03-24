// this file is used to write / handle the service related / api related stuff.

import API from "../../../utils/API";

export const registerService = async (data) => {
  // data : data recived from  the component.
  // we need to perform the rest call to :http://localhost:9500/api/users
  // type : public
  // method : post
  // data : {username, email, password}
  try {
    const res = await API.post("/users", data); // await : it will wait for the response
    return { status: true, data: res.data };
  } catch (error) {
    // console.log(error);
    throw { status: error.response.status, data: error.response.data }; // it will throw the error to the component where we are calling this service.
  }

  // http://localhost:9500/api/users complete URL : baseURL + /api +/users
  // baseURL : http://localhost:9500 : it would be handled by vite server proxy configuration.
  // /api : it is the baseURL part which is already set in our API object./ axios
  // /users : it is the endpoint part which we need to pass in our API call.
};

export const loginService = async (data) => {
  try {
    const res = await API.post("/auth", data);
    return { status: true, data: res.data };
  } catch (error) {
    console.log(error);
    return { status: false, data: error };
  }
};
