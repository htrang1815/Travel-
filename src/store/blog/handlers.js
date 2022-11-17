import { call, put } from "redux-saga/effects";
import requestGetBlog from "./callApi";
import { setBlog } from "./slice";

export default function* handleGetBlog(actions) {
  try {
    const response = yield call(requestGetBlog, actions.payload);

    const { blog } = response.data.data;

    yield put(setBlog(blog));
  } catch (err) {
    console.log(err);
  }
}
