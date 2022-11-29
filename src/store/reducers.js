import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import projectListSlice from "./projectList/slice";
import projectSlice from "./project/slice";
import showSlice from "./showModal/showSlice";
import reviewSlice from "./review/reviewSlice";
import guideListSlice from "./guideList/slice";
import blogListSlice from "./blogList/slice";
import loadingSlice from "./loading/loadingSlice";
import guideSlice from "./guide/slice";
import blogSlice from "./blog/slice";
import myBlogSlice from "./myblog/slice";
import myReviewSlice from "./myreview/slice";
import reviewGuideSlice from "./reviewGuide/reviewSlice";
import alertSlice from "./alert/alertSlice";
import userProfileSlice from "./userProfile/slice";
import reviewListSlice from "./reviewList/slice";
import filterSearchSlice from "./filterSearch/filterSearch";

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
  alert: alertSlice,
  blogList: blogListSlice,
  blog: blogSlice,
  myblog: myBlogSlice,
  myreview: myReviewSlice,
  userProfile: userProfileSlice,
  reviewList: reviewListSlice,
  filterSearch: filterSearchSlice,
});
