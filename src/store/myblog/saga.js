import { takeLatest } from "redux-saga/effects";
import handleGetMyBlog from "./handlers";

import { getMyBlog } from "./slice";

export default function* myBlogSaga() {
  yield takeLatest(getMyBlog.type, handleGetMyBlog);
}
