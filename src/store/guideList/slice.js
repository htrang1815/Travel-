import { createSlice } from "@reduxjs/toolkit";

const guideListSlice = createSlice({
  name: "guideList",
  initialState: {
    guideList: [],
  },
  reducers: {
    setGuideList: (state, action) => ({
      ...state,
      guideList: action.payload,
    }),
    getGuideList() {},
  },
});
export const { setGuideList, getGuideList } = guideListSlice.actions;

export default guideListSlice.reducer;
