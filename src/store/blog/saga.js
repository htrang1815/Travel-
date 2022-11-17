import { takeLatest } from "redux-saga/effects";
import handleGetBlog from "./handlers";
import { getBlog } from "./slice";

export default function* blogSaga() {
  yield takeLatest(getBlog.type, handleGetBlog);
}
