import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import projectListSlice from "./projectList/slice";
import projectSlice from "./project/slice";
import showSlice from "./showModal/showSlice";
import reviewSlice from "./review/reviewSlice";
<<<<<<< HEAD
import guideListSlice from "./guide/slice";
=======
import loadingSlice from "./loading/loadingSlice";
>>>>>>> ebbdb26580c71e1af8725fde787f7c39f8cafcce

export const reducer = combineReducers({
  auth: authSlice,
  projectList: projectListSlice,
  project: projectSlice,
  show: showSlice,
  review: reviewSlice,
<<<<<<< HEAD
  guideList: guideListSlice,
=======
  loading: loadingSlice,
>>>>>>> ebbdb26580c71e1af8725fde787f7c39f8cafcce
});
