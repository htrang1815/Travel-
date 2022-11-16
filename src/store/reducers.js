import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import projectListSlice from "./projectList/slice";
import projectSlice from "./project/slice";
import showSlice from "./showModal/showSlice";
import reviewSlice from "./review/reviewSlice";
import guideListSlice from "./guideList/slice";
import loadingSlice from "./loading/loadingSlice";
import guideSlice from "./guide/slice";
import reviewGuideSlice from "./reviewGuide/reviewSlice";

export const reducer = combineReducers({
  auth: authSlice,
  projectList: projectListSlice,
  project: projectSlice,
  show: showSlice,
  review: reviewSlice,
  guideList: guideListSlice,
  guide: guideSlice,
  loading: loadingSlice,
  reviewGuide: reviewGuideSlice,
});
