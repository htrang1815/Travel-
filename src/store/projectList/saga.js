import { takeLatest } from "redux-saga/effects";
import handleGetProjectList from "./handlers";

import { getProjectList } from "./slice";

export default function* projectListSaga() {
  yield takeLatest(getProjectList.type, handleGetProjectList);
}
