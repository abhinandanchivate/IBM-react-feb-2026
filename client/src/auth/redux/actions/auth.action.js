import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../service/auth.service";

export const registerUserAction = createAsyncThunk(
  "auth/registerUserAction", // action name, it should be unique to ur application. ---> we will use the name of the reducer followed by / and then action name
  async (formData, { rejectWithValue }) => {
    try {
      const data = await registerUser(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  },
  // async : to perform asynchronous operations like api calls to the backend
  // formData : argument which we will pass from the component when we will dispatch this action to perform the api call to the backend for registering the user.
  // rejectWithValue : it is a function which is provided by the createAsyncThunk to handle the error response from the backend. --> it will help us to return the error response from the backend to the component where we are dispatching this action to perform some actions based on the error response from the backend.
);
// createAsyncThunk:
// create: to create the action
// async: to perform asynchronous operations like api calls to the backend
// thunk(middleware part ): it will help us to dispatch multiple actions based on the response from the backend. --> pending, fulfilled, rejected actions will be dispatched based on the response from the backend. --> we can perform some actions in the component based on these actions which are dispatched by the thunk. --> we can show loading spinner when the pending action is dispatched, we can show success message when the fulfilled action is dispatched and we can show error message when the rejected action is dispatched. --> it will help us to manage the state of our application based on the response from the backend.
// middleware now it is managed by redux toolkit
// pending/ inprogress : when the api call is in progress

// fulfilled/ success : when the api call is successful
// rejected/failure : when the api call is failed
export const loginUserAction = createAsyncThunk(
  "auth/loginUserAction",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await loginUser(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  },
);
