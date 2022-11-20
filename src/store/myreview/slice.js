import { createSlice } from "@reduxjs/toolkit";

const myReviewSlice = createSlice({
  name: "myreview",
  initialState: {
    myreview: [],
  },
  reducers: {
    setMyReview: (state, action) => ({
      ...state,
      myreview: action.payload,
    }),

    getMyReview() {},
  },
});

export const { setMyReview, getMyReview } = myReviewSlice.actions;
export default myReviewSlice.reducer;
