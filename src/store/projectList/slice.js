import { createSlice } from "@reduxjs/toolkit";

const projectListSlice = createSlice({
  name: "projectList",
  initialState: {
    projectList: [],
  },
  reducers: {
    setProjectList: (state, action) => ({
      ...state,
      projectList: action.payload,
    }),
    getProjectList() {},
  },
});

export const { setProjectList, getProjectList } = projectListSlice.actions;

export default projectListSlice.reducer;
