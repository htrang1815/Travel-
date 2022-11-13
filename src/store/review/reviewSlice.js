import { createSlice } from "@reduxjs/toolkit";
const reviewSlice = createSlice({
  name: "review",
  initialState: {
    rating: 0,
    reviewInATour: [],
  },
  reducers: {
    setRating: (state, action) => ({
      ...state,
      rating: action.payload,
    }),
    setReviewInfoInTour: (state, action) => ({
      ...state,
      reviewInATour: action.payload,
    }),

    getReviewInTour() {},
  },
});

export const { setRating, setReviewInfoInTour, getReviewInTour } =
  reviewSlice.actions;

export default reviewSlice.reducer;
