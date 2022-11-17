import { takeLatest } from "redux-saga/effects";
import handleGetBlogList from "./handlers";

import { getBlogList } from "./slice";

export default function* blogListSaga() {
  yield takeLatest(getBlogList.type, handleGetBlogList);
  // hàm getBlogList: ở slice.js
  // hàm handleGetBlogList: ở handlers.js
}
