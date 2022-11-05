import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    project: {},
  },
  reducers: {
    setProject: (state, action) => ({
      ...state,
      project: action.payload,
    }),
    getProject() {},
  },
});

export const { setProject, getProject } = projectSlice.actions;

export default projectSlice.reducer;
