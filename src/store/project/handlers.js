import { call, put } from "redux-saga/effects";
import requestGetProject from "./callApi";
import { setProject } from "./slice";

export default function* handleGetProject(actions) {
  try {
    const response = yield call(requestGetProject, actions.payload);

    const { project } = response.data.data;

    yield put(setProject(project));
  } catch (err) {
    console.log(err);
  }
}
