// getCurrentprofileAction

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentProfile } from "../../../services/profile.service";

export const getCurrentProfileAction = createAsyncThunk(
  "profile/getCurrentProfileAction",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await getCurrentProfile();
      return { data, status };
    } catch (error) {
      return rejectWithValue({ data: error.data, status: error.status });
    }
  },
);
