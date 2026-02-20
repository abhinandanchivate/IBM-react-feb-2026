import { createSlice } from "@reduxjs/toolkit";
const authState = {
  isAuthenticated: false,
  user: null,
  token: null,
  status: "",
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {},
});

// slice is helping us to get the reducers
export default authSlice.reducer;
// declare the slice and get the reducer from it
// register the reducer in the store, under the reducers details in the store file.
