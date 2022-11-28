import { createSlice } from "@reduxjs/toolkit";
const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    userProfile: [],
  },
  reducers: {
    setUserProfile: (state, action) => ({
      ...state,
      userProfile: action.payload,
    }),

    getUserProfile() {},
  },
});

export const { setUserProfile, getUserProfile } =
userProfileSlice.actions;

export default userProfileSlice.reducer;
