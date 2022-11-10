import { createSlice } from "@reduxjs/toolkit";
const showSlice = createSlice({
  name: "show",
  initialState: {
    showShare: false,
    showMorePhoto: false,
    showAddNew: false,
    showModalReview: false,
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
    setShowAddNew: (state, action) => ({
      ...state,
      showAddNew: action.payload,
    }),
    setShowModalReview: (state, action) => ({
      ...state,
      showModalReview: action.payload,
    }),
    setPhoto: (state, action) => ({
      ...state,
      photo: action.payload,
    }),
  },
});

export const {
  setShowShare,
  setShowMorePhoto,
  setShowAddNew,
  setPhoto,
  setShowModalReview,
} = showSlice.actions;

export default showSlice.reducer;
