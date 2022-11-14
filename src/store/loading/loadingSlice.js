import { createSlice } from "@reduxjs/toolkit";
const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loadingButtonReview: false,
  },
  reducers: {
    setLoadingButtonReview: (state, action) => ({
      ...state,
      loadingButtonReview: action.payload,
    }),
  },
});

export const { setLoadingButtonReview } = loadingSlice.actions;

export default loadingSlice.reducer;
