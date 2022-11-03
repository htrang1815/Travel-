import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    isLogin: false,
  },
  reducers: {
    setIsLogin: (state, action) => ({
      ...state,
      isLogin: action.payload,
    }),
    getIsLogin() {},
    setUser: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },
});

export const { setIsLogin, getIsLogin, setUser } = authSlice.actions;

export default authSlice.reducer;
