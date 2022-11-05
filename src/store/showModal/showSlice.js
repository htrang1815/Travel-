import { createSlice } from "@reduxjs/toolkit";
const showSlice = createSlice({
  name: "show",
  initialState: {
    showShare: false,
  },
  reducers: {
    setShowShare: (state, action) => ({
      ...state,
      showShare: action.payload,
    }),
  },
});

export const { setShowShare } = showSlice.actions;

export default showSlice.reducer;
