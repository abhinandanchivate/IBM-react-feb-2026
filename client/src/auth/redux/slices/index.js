import { createSlice } from "@reduxjs/toolkit";
import { registerUserAction } from "../actions/auth.action";
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
  // reducers: to handle only sync actions where we can have direct manipulation of the state
  // logout : isAuthenticated : false --> direct manipulation fo the state.

  extraReducers: (builder) => {
    // u will come across only 3 action based situations : no more extra actions are allowed here.

    // pending action for login user action
    builder.addCase(loginUserAction.pending, (state) => {});
    // fulfilled action for login user action
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.isAuthenticated = true;

      state.token = action.payload.data.token;
      localStorage.setItem("token", action.payload.data.token); // to store the token in the local storage of the browser to maintain the session of the user.
      state.status = action.payload.status;
      state.loading = false;
      state.error = null;
    });
    // rejected action for login user action
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.status = action.payload.status;
      state.loading = false;
      state.error = action.payload.data.message;
    });
    // pending action
    builder.addCase(registerUserAction.pending, (state) => {});
    // fulfilled action/ success action
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      // action: payload / data which is coming from the action
      state.isAuthenticated = true;
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      localStorage.setItem("token", action.payload.data.token); // to store the token in the local storage of the browser to maintain the session of the user.
      state.status = action.payload.status;
      state.loading = false;
      state.error = null;
    });
    // rejected action/ failure action
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.status = action.payload.status;
      state.loading = false;
      state.error = action.payload.data.message;
    });
  },
  // extrareducers : used to handle the rest based actions
});

// slice is helping us to get the reducers
export default authSlice.reducer;
// declare the slice and get the reducer from it
// register the reducer in the store, under the reducers details in the store file.
