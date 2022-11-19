import { createSlice } from "@reduxjs/toolkit";

const myBlogSlice = createSlice({
  name: "myblog",
  initialState: {
    myblog: [],
  },
  reducers: {
    setMyBlog: (state, action) => ({
      ...state,
      myblog: action.payload,
    }),
    getMyBlog() {},
  },
});

export const { setMyBlog, getMyBlog } = myBlogSlice.actions;
export default myBlogSlice.reducer;
