import { call, put } from "redux-saga/effects";
import requestGetGuide from "./callApi";
import { setGuide } from "./slice";

export default function* handleGetGuide(actions) {
  try {
    const response = yield call(requestGetGuide, actions.payload);

    const { guide } = response.data.data;

    yield put(setGuide(guide));
  } catch (err) {
    console.log(err);
  }
}
