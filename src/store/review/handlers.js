import { call, put } from "redux-saga/effects";
import requestGetReviewInATour from "./callApi";
import { setReviewInfoInTour } from "./reviewSlice";

export default function* handleGetReviewInProject(actions) {
  try {
    const response = yield call(requestGetReviewInATour, actions.payload);
    const { reviews } = response.data.data;

    yield put(setReviewInfoInTour(reviews));
  } catch (err) {
    console.log(err);
  }
}
