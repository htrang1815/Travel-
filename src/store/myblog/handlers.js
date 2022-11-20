import { call, put } from "redux-saga/effects";
import requestGetMyBlog from "./callApi";
import { setMyBlog } from "./slice";

export default function* handleGetBlog(actions) {
  // actions ở đây khác vs action.payload trong slice.js
  try {
    // Gọi đến hàm call API, tham số thứ hai là prop truyền vào API
    const response = yield call(requestGetMyBlog, actions.payload);

    // Lấy dữ liệu  cần
    const { blogs } = response.data.data;

    // update lại state
    yield put(setMyBlog(blogs));
    //  sets đc truyền vào set chính
    // là action.payload trong slice.js
  } catch (err) {
    console.log(err);
  }
}
