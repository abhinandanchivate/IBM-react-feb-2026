// authentication status, user details, token , error related to auth it should hold it.

import { createSlice } from "@reduxjs/toolkit";

const authState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem("token"),
  loading: true,
  error: null,
};
// we used a term called module ==> it is refered as slice
const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {},
});
export default authSlice.reducer;
