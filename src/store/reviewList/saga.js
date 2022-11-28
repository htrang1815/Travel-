import { takeLatest } from "redux-saga/effects";
import handleGetReviewList from "./handlers";

import { getReviewList } from "./slice";

export default function* reviewListSaga() {
  yield takeLatest(getReviewList.type, handleGetReviewList);
  // hàm getBlogList: ở slice.js
  // hàm handleGetBlogList: ở handlers.js
}
