import { createSlice } from "@reduxjs/toolkit";
const reviewSlice = createSlice({
  name: "review",
  initialState: {
    rating: 0,
  },
  reducers: {
    setRating: (state, action) => ({
      ...state,
      rating: action.payload,
    }),
  },
});

export const { setRating } = reviewSlice.actions;

export default reviewSlice.reducer;
