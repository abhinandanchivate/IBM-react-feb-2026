// we will write an action called register user action.
// this action will consume the registerService (which will perform the rest call to the backend )

import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, registerService } from "../services/auth.service";

export const registerUserAction = createAsyncThunk(
  "auth/registerUserAction",
  async (formData, { dispatch, rejectWithValue }) => {
    // are we consuming the service ?
    try {
      const res = await registerService(formData);
      return res;
    } catch (error) {
      rejectWithValue(error.data);
    }

    // we need to perform the rest call .
    // do u want to make any decision ? ---> what needs to be rendered : NO.
    // if it is giving success return the promise object
    // if it is giving the failure throw the error details.
  },
);
// dispatch : to call the other action
// rejectedwithvalue : we will use to throw the exceptional details.
// formData : data passed by component for processing purpose.

export const loginUserAction = createAsyncThunk(
  "auth/loginUserAction",
  async (formData, { dispatch, rejectWithValue }) => {
    try {
      const res = loginService(formData);
      return res;
    } catch (error) {
      rejectWithValue(error.data);
    }
  },
);
