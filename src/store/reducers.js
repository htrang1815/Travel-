import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import projectListSlice from "./projectList/slice";
import projectSlice from "./project/slice";

export const reducer = combineReducers({
  auth: authSlice,
  projectList: projectListSlice,
  project: projectSlice,
});
