import { takeLatest } from "redux-saga/effects";
import handleGetMyReview from "./handlers";

import { getMyReview } from "./slice";

export default function* myReviewSaga() {
  yield takeLatest(getMyReview.type, handleGetMyReview);
}
