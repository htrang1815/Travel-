import { createSlice } from "@reduxjs/toolkit";
const reviewGuideSlice = createSlice({
  name: "reviewGuide",
  initialState: {
    rating: 0,
    reviewInAGuide: [],
  },
  reducers: {
    setRating: (state, action) => ({
      ...state,
      rating: action.payload,
    }),
    setReviewInfoInGuide: (state, action) => ({
      ...state,
      reviewInAGuide: action.payload,
    }),

    getReviewInAGuide() {},
  },
});

export const { setRating, setReviewInfoInGuide, getReviewInAGuide } =
  reviewGuideSlice.actions;

export default reviewGuideSlice.reducer;
