import { createSlice } from "@reduxjs/toolkit";

const allreviewSlice = createSlice({
  name: "allreview",
  initialState: {
    review: {},
  },
  reducers: {
    setAllReview: (state, action) => ({
      ...state,
      review: action.payload,
    }),

    getAllReview() {},
  },
});

export const { setAllReview, getAllReview } = allreviewSlice.actions;

export default allreviewSlice.reducer;
