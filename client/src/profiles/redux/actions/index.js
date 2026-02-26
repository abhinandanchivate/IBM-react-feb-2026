// getCurrentprofileAction

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addExperience,
  createProfile,
  getAllProfiles,
  getCurrentProfile,
  getProfileById,
} from "../../services/profile.service";
import { useId } from "react";

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

export const getAllProfilesAction = createAsyncThunk(
  "profile/getAllProfilesAction",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await getAllProfiles();
      return { data, status };
    } catch (error) {
      return rejectWithValue({ data: error.data, status: error.status });
    }
  },
);

export const getProfileByIdAction = createAsyncThunk(
  "profile/getProfileByIdAction",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      const { data, status } = await getProfileById(id);
      return { data, status };
    } catch (error) {
      return rejectWithValue({ data: error.data, status: error.status });
    }
  },
);
