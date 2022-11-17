import { createSlice } from "@reduxjs/toolkit";

const blogListSlice = createSlice({
  name: "blogList",
  initialState: {
    blogList: [],
  },
  reducers: {
    setBlogList: (state, action) => ({
      ...state,
      blogList: action.payload,
    }),
    getBlogList() {},
  },
});
export const { setBlogList, getBlogList } = blogListSlice.actions;

export default blogListSlice.reducer;
