import { createSlice } from "@reduxjs/toolkit";

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
});

export const { login } = authSlice.actions;
export const getAuthData = (state) => state.auth.data;
export default authSlice.reducer;
