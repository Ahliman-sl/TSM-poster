import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
  isAuthenticated: !!token,
  token: token ? token : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token");
    },
    signup: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
