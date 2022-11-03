import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";

export const reducer = combineReducers({
  auth: authSlice,
});
