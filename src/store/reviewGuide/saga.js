import { takeLatest } from "redux-saga/effects";
import handleGetReviewInGuide from "./handlers";
import { getReviewInAGuide } from "./reviewSlice";

export default function* reviewInGuideSaga() {
  yield takeLatest(getReviewInAGuide.type, handleGetReviewInGuide);
}
