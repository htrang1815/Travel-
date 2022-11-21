import { createSlice } from "@reduxjs/toolkit";
const reviewSlice = createSlice({
  name: "review",
  initialState: {
    rating: 0,
    reviewInATour: [],
    reviewUpdateUser : {}
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

    setReviewUpdateUser : (state, action) => ({
      ...state,
      reviewUpdateUser : action.payload,
    }),

    getReviewInTour() {},
  },
});

export const { setRating, setReviewInfoInTour, getReviewInTour, setReviewUpdateUser } =
  reviewSlice.actions;

export default reviewSlice.reducer;
