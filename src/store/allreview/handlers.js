import { call, put } from "redux-saga/effects";
import requestGetAllReview from "./callApi";
import { setAllReview } from "./slice";

export default function* handleGetAllReview(actions) {
  try {
    const response = yield call(requestGetAllReview, actions.payload);

    const { review } = response.data.data;

    yield put(setAllReview(review));
  } catch (err) {
    console.log(err);
  }
}
