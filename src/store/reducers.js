import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import projectListSlice from "./projectList/slice";
import projectSlice from "./project/slice";
import showSlice from "./showModal/showSlice";
import reviewSlice from "./review/reviewSlice";
import loadingSlice from "./loading/loadingSlice";

export const reducer = combineReducers({
  auth: authSlice,
  projectList: projectListSlice,
  project: projectSlice,
  show: showSlice,
  review: reviewSlice,
  loading: loadingSlice,
});
