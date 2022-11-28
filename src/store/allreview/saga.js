import { takeLatest } from "redux-saga/effects";
import handleGetAllReview from "./handlers";
import { getAllReview } from "./slice";

export default function* allreviewSaga() {
  yield takeLatest(getAllReview.type, handleGetAllReview);
}
