// we will write an action called register user action.
// this action will consume the registerService (which will perform the rest call to the backend )

import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUserAction = createAsyncThunk(
  "auth/registerUserAction",
  async (formData, { dispatch, rejectWithValue }) => {},
);
// dispatch : to call the other action
// rejectedwithvalue : we will use to throw the exceptional details.
// formData : data passed by component for processing purpose.
