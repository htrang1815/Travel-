import { createSlice } from "@reduxjs/toolkit";

const guideSlice = createSlice({
  name: "guide",
  initialState: {
    guide: {},
  },
  reducers: {
    setGuide: (state, action) => ({
      ...state,
      guide: action.payload,
    }),

    getGuide() {},
  },
});

export const { setGuide, getGuide } = guideSlice.actions;

export default guideSlice.reducer;
