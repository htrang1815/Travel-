import { call, put } from "redux-saga/effects";
import requestGetMyReview from "./callApi";
import { setMyReview } from "./slice";

export default function* handleGetReview(actions) {
  // actions ở đây khác vs action.payload trong slice.js
  try {
    // Gọi đến hàm call API, tham số thứ hai là prop truyền vào API
    const response = yield call(requestGetMyReview, actions.payload);

    // Lấy dữ liệu  cần
    const { reviews } = response.data.data;

    // update lại state
    yield put(setMyReview(reviews));
    //  sets đc truyền vào set chính
    // là action.payload trong slice.js
  } catch (err) {
    console.log(err);
  }
}
