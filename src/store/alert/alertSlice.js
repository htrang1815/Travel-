import { createSlice } from "@reduxjs/toolkit";
const alertSlice = createSlice({
  name: "alert",
  initialState: {
    showAlert: false,
    alertContent: " ",
    type: "success",
  },
  reducers: {
    setShowAlert: (state, action) => ({
      ...state,
      showAlert: action.payload,
    }),
    setAlertContent: (state, action) => ({
      ...state,
      alertContent: action.payload,
    }),
    setType: (state, action) => ({
      ...state,
      type: action.payload,
    }),
  },
});
export const { setShowAlert, setAlertContent, setType } = alertSlice.actions;
export default alertSlice.reducer;
