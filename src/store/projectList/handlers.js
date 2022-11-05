import { call, put } from "redux-saga/effects";
import requestGetProjectList from "./callApi";

import { setProjectList } from "./slice";

export default function* handleGetProjectList() {
  try {
    const response = yield call(requestGetProjectList);
    const { projects } = response.data.data;

    yield put(setProjectList(projects));
  } catch (err) {
    console.log(err);
  }
}
