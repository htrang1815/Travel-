import { createSlice } from "@reduxjs/toolkit";
const showSlice = createSlice({
  name: "show",
  initialState: {
    showShare: false,
    showMorePhoto: false,
    photo: [],
  },
  reducers: {
    setShowShare: (state, action) => ({
      ...state,
      showShare: action.payload,
    }),
    setShowMorePhoto: (state, action) => ({
      ...state,
      showMorePhoto: action.payload,
    }),
    setPhoto: (state, action) => ({
      ...state,
      photo: action.payload,
    }),
  },
});

export const { setShowShare, setShowMorePhoto, setPhoto } = showSlice.actions;

export default showSlice.reducer;
