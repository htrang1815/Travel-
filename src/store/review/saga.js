import { takeLatest } from "redux-saga/effects";
import handleGetReviewInProject from "./handlers";
import { getReviewInTour } from "./reviewSlice";

export default function* projectInTourSaga() {
  yield takeLatest(getReviewInTour.type, handleGetReviewInProject);
}
