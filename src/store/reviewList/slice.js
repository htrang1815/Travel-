import { createSlice } from "@reduxjs/toolkit";

const reviewListSlice = createSlice({
  name: "reviewList",
  initialState: {
    reviewList: [],
  },
  reducers: {
    setReviewList: (state, action) => ({
      ...state,
      reviewList: action.payload,
    }),
    getReviewList() {},
  },
});
export const { setReviewList, getReviewList } = reviewListSlice.actions;

export default reviewListSlice.reducer;
