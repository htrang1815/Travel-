import { call, put } from "redux-saga/effects";
import requestGetBlogList from "./callApi";
import { setBlogList } from "./slice";
 
export default function* handleGetBlogList(actions) {
// actions ở đây khác vs action.payload trong slice.js
 try {
   // Gọi đến hàm call API, tham số thứ hai là prop truyền vào API
   const response = yield call(requestGetBlogList, actions.payload);
  console.log(response)
   // Lấy dữ liệu  cần
   const { blogs } = response.data.data;
 
   // update lại state
   yield put(setBlogList(blogs));
   //  sets đc truyền vào set chính 
   // là action.payload trong slice.js
 } catch (err) {
   console.log(err);
 }
}
 
