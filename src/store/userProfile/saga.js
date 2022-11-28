import { takeLatest } from "redux-saga/effects";
import handleGetUserProfile from "./handlers";
import { getUserProfile } from "./slice";

export default function* userProfileSaga() {
  yield takeLatest(getUserProfile.type, handleGetUserProfile);
}
