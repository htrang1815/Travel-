import { call, put } from "redux-saga/effects";
import requestGetReviewInAGuide from "./callApi";
import { setReviewInfoInGuide } from "./reviewSlice";

export default function* handleGetReviewInGuide(actions) {
  try {
    const response = yield call(requestGetReviewInAGuide, actions.payload);
    const { reviews } = response.data.data;

    yield put(setReviewInfoInGuide(reviews));
  } catch (err) {
    console.log(err);
  }
}
