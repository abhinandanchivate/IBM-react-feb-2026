import { createSlice } from "@reduxjs/toolkit";
import { getCurrentProfileAction } from "../actions";

// profile slice
const profileState = {
  profile: null, // to hold current user profile
  profiles: [], // to hold all the profiles
  repos: [], // to hold git repos
  loading: true, // status
  error: null, // to hold the error response from the backend if any api call is failed
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profileState,
  reducers: {},
  extraReducers: (builder) => {
    // we will handle the actions for getCurrentProfileAction here in the extra reducers because it is an async action and we will have 3 actions for this async action : pending, fulfilled and rejected.
    builder.addCase(getCurrentProfileAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCurrentProfileAction.fulfilled, (state, action) => {
      state.profile = action.payload.data; // to set the profile data in the state which is coming from the backend in the response of the api call.
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getCurrentProfileAction.rejected, (state, action) => {
      state.profile = null;
      state.loading = false;
      state.error = action.payload.data; // to set the error message in the state which is coming from the backend in the response of the api call if any error occurs.
    });
  },
});
export default profileSlice.reducer;
