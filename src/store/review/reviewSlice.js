import { createSlice } from "@reduxjs/toolkit";
const reviewSlice = createSlice({
  name: "review",
  initialState: {
    rating: 0,
    reviewInfo: {},
  },
  reducers: {
    setRating: (state, action) => ({
      ...state,
      rating: action.payload,
    }),
    setReviewInfo: (state, action) => ({
      ...state,
      reviewInfo: action.payload,
    }),
  },
});

export const { setRating, setReviewInfo } = reviewSlice.actions;

export default reviewSlice.reducer;
