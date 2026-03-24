// authentication status, user details, token , error related to auth it should hold it.

import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction, registerUserAction } from "./auth.action";

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
  // logout :  // it will help us to clear the details from the Frontend : reducer
  // user Registration : extra reducers
  // adding details to cart : extra reducers ==> cart details will be stored in BE app.

  // will hold any non rest api related stuff / direct UI related BL handlings
  reducers: {},

  // will hold any rest api related stuff / direct UI related BL handlings
  extraReducers: (builder) => {
    // all 3 cases for login
    // builder.addCase(loginUserAction.pending, (state) => {});
    // automatically it will take that pending situation with default values.

    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.data;
      state.status = action.payload.status;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.error = action.payload.data;
    });
    // all3 cases for register
    // builder.addCase(registerUserAction.pending, (state) => {
    //   state.loading = true;
    // });
    // state=>{} will help us to modify the authState / authReducer part .
    builder.addCase(
      registerUserAction.fulfilled,
      (
        state,
        action, // when we want to take anything from the rest call
      ) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.token = action.payload.data?.token;
      },
    );
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.error = action.payload.data;
    });
    // we mapped rt values to rt state field. some of the values are taken from action and some we have hard coded.

    // action type : pending , success, failure and state change stuff ==> on the specific action what data needs to be changed from the global state / store .
  },
});
export default authSlice.reducer;
