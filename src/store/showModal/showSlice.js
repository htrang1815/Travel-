import { faDiagramSuccessor } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";
const showSlice = createSlice({
  name: "show",
  initialState: {
    showShare: false,
    showMorePhoto: false,
    showAddNew: false,
    showModalReview: false,
    showModalUser: false,
    showFilter: false,
    showContactGuide: false,
    showModalAlert: {
      showAlert: true,
      alertContent: "",
      alertType: "success",
    },
    showModalUpdateReview: false,
    showModalBooking: false,
    savefavourite: false,
    photo: [],
  },
  reducers: {
    setSaveFavourite: (state, action) => ({
      ...state,
      savefavourite: action.payload,
    }),
    setShowShare: (state, action) => ({
      ...state,
      showShare: action.payload,
    }),
    setShowModalAlert: (state, action) => ({
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
    setShowModalUpdateReview: (state, action) => ({
      ...state,
      showModalUpdateReview: action.payload,
    }),
    setShowModalReview: (state, action) => ({
      ...state,
      showModalReview: action.payload,
    }),
    setShowModalBooking: (state, action) => ({
      ...state,
      showModalBooking: action.payload,
    }),
    setShowModalUser: (state, action) => ({
      ...state,
      showModalUser: action.payload,
    }),
    setPhoto: (state, action) => ({
      ...state,
      photo: action.payload,
    }),
    setShowFilter: (state, action) => ({
      ...state,
      showFilter: action.payload,
    }),
    setShowContactGuide: (state, action) => ({
      ...state,
      showContactGuide: action.payload,
    }),
  },
});

export const {
  setShowShare,
  setShowModalAlert,
  setShowMorePhoto,
  setShowAddNew,
  setPhoto,
  setShowModalReview,
  setShowModalUser,
  setShowFilter,
  setShowContactGuide,
  setSaveFavourite,
  setShowModalUpdateReview,
  setShowModalBooking,
} = showSlice.actions;

export default showSlice.reducer;
