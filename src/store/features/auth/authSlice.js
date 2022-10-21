import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "./authAPI";

export const loginAsync = createAsyncThunk("login", async (data) => {
  const response = await authAPI.login(data);
  if (!response.data.error) {
    localStorage.setItem("token", response.data.payload.token);
  }
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: {},
  },
  reducers: {
    login: (state, action) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },
  extraReducers: {
    [loginAsync.fulfilled]: (state, action) => {
      const { payload } = action;
      state.data = {
        ...payload.payload.user,
      };
    },
  },
});

export const { login } = authSlice.actions;
export const getAuthData = (state) => state.auth.data;
export default authSlice.reducer;
