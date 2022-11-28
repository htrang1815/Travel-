import { createSlice } from "@reduxjs/toolkit";

const blogListSlice = createSlice({
  name: "blogList",
  initialState: {
    blogList: [],
    blogPage: 1,
  },
  reducers: {
    setBlogList: (state, action) => ({
      ...state,
      blogList: action.payload,
    }),
    setBlogPage: (state, action) => ({
      ...state,
      blogPage: action.payload,
    }),
    getBlogList() {},
  },
});
export const { setBlogList, getBlogList, setBlogPage } = blogListSlice.actions;

export default blogListSlice.reducer;
