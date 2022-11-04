import { takeLatest } from "redux-saga/effects";
import handleGetProject from "./handlers";
import { getProject } from "./slice";

export default function* projectSaga() {
  yield takeLatest(getProject.type, handleGetProject);
}
