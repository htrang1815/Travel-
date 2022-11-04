import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import projectListSlice from "./projectList/slice";

export const reducer = combineReducers({
  auth: authSlice,
  projectList: projectListSlice,
});
