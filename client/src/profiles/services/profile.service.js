// /api/profile/me --> to get the profile of the logged in user from the backend

import API from "../../utils/api";

export const createProfile = async (formData) => {
  try {
    const res = await API.post("/profile", formData);
    return { data: res.data, status: res.status };
  } catch (error) {
    throw { data: error.response.data, status: error.response.status };
  }
};

export const getCurrentProfile = async () => {
  try {
    const res = await API.get("/profile/me"); // endpoint to get the profile of the logged in user from the backend
    return { data: res.data, status: res.status }; // we will return the data and status from the backend to the component where we are calling this getCurrentProfile function to perform some actions based on the response from the backend.
  } catch (error) {
    console.log(error);
    throw { data: error.response.data, status: error.response.status }; // we will return the error data and status from the backend to the component where we are calling this getCurrentProfile function to perform some actions based on the response from the backend.
  }
};
// add-exp : we have to work with put method.
// because exp is a part of ur profile --> stored in mongodb as an array.
// ur profile is an existing profile ---> to update anything --> in rest =--> put method.
export const addExperience = async (formData) => {
  try {
    const res = await API.put("/profile/experience", formData);
    return { data: res.data, status: res.status };
  } catch (error) {
    console.log(error);
    throw { data: error.response.data, status: error.response.status };
  }
};
// add-edu: we have to work with put method.
