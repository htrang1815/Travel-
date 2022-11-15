import { takeLatest } from "redux-saga/effects";
import handleGetGuide from "./handlers";
import { getGuide } from "./slice";

export default function* guideSaga() {
  yield takeLatest(getGuide.type, handleGetGuide);
}
