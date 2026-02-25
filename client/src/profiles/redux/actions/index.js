// getCurrentprofileAction

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addExperience,
  createProfile,
  getCurrentProfile,
} from "../../services/profile.service";

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

export const createProfileAction = createAsyncThunk(
  "profile/createProfileAction",
  async (formData, { rejectWithValue }) => {
    try {
      const { data, status } = await createProfile(formData);
      return { data, status };
    } catch (error) {
      return rejectWithValue({ data: error.data, status: error.status });
    }
  },
);

export const addExperienceAction = createAsyncThunk(
  "profile/addExperienceAction",
  async (formData, { rejectWithValue }) => {
    try {
      const { data, status } = await addExperience(formData);
      return { data, status };
    } catch (error) {
      return rejectWithValue({ data: error.data, status: error.status });
    }
  },
);
