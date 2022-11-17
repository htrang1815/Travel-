import { createSlice } from "@reduxjs/toolkit";

const projectListSlice = createSlice({
  name: "projectList",
  initialState: {
    projectList: [],
    projectPage: 1,
  },
  reducers: {
    setProjectList: (state, action) => ({
      ...state,
      projectList: action.payload,
    }),
    setProjectPage: (state, action) => ({
      ...state,
      projectPage: action.payload,
    }),
    getProjectList() {},
  },
});

export const { setProjectList, getProjectList, setProjectPage } =
  projectListSlice.actions;

export default projectListSlice.reducer;
