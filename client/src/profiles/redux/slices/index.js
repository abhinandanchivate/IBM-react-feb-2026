import { createSlice } from "@reduxjs/toolkit";
import {
  addExperienceAction,
  createProfileAction,
  getAllProfilesAction,
  getCurrentProfileAction,
} from "../actions";

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
    builder.addCase(getAllProfilesAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProfilesAction.fulfilled, (state, action) => {
      state.profiles = action.payload.data; // to set the profiles data in the state which is coming from the backend in the response of the api call.
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getAllProfilesAction.rejected, (state, action) => {
      state.profiles = [];
      state.loading = false;
      state.error = action.payload.data; // to set the error message in the state which is coming from the backend in the response of the api call if any error occurs.
    });
    builder.addCase(addExperienceAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addExperienceAction.fulfilled, (state, action) => {
      state.profile = action.payload.data; // to set the profile data in the state which is coming from the backend in the response of the api call.
      state.loading = false;
    });
    builder.addCase(addExperienceAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.data; // to set the error message in the state which is coming from the backend in the response of the api call if any error occurs.
    });

    builder.addCase(createProfileAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProfileAction.fulfilled, (state, action) => {
      state.profile = action.payload.data; // to set the profile data in the state which is coming from the backend in the response of the api call.
      state.profiles = [];
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createProfileAction.rejected, (state, action) => {
      state.profile = null;
      state.profiles = [];
      state.loading = false;
      state.error = action.payload.data; // to set the error message in the state which is coming from the backend in the response of the api call if any error occurs.

      state.loading = false;
      state.error = action.payload.data; // to set the error message in the state which is coming from the backend in the response of the api call if any error occurs.
    });
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
