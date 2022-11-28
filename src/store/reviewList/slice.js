import { createSlice } from "@reduxjs/toolkit";

const reviewListSlice = createSlice({
  name: "reviewList",
  initialState: {
    ReviewList: [],
  },
  reducers: {
    setReviewList: (state, action) => ({
      ...state,
      ReviewList: action.payload,
    }),
    getReviewList() {},
  },
});
export const { setReviewList, getReviewList, } = reviewListSlice.actions;

export default reviewListSlice.reducer;
