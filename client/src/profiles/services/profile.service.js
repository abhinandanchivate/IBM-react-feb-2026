// /api/profile/me --> to get the profile of the logged in user from the backend

import API from "../../utils/api";

export const getCurrentProfile = async () => {
  try {
    const res = await API.get("/profile/me"); // endpoint to get the profile of the logged in user from the backend
    return { data: res.data, status: res.status }; // we will return the data and status from the backend to the component where we are calling this getCurrentProfile function to perform some actions based on the response from the backend.
  } catch (error) {
    console.log(error);
    throw { data: error.response.data, status: error.response.status }; // we will return the error data and status from the backend to the component where we are calling this getCurrentProfile function to perform some actions based on the response from the backend.
  }
};
