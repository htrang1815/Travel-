import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: {},
  },
  reducers: {
    setBlog: (state, action) => ({
      ...state,
      blog: action.payload,
    }),

    getBlog() {},
  },
});

export const { setBlog, getBlog } = blogSlice.actions;

export default blogSlice.reducer;
