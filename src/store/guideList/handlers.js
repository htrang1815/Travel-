import { call, put } from "redux-saga/effects";
import requestGetGuideList from "./callApi";
import { setGuideList } from "./slice";
 
export default function* handleGetGuideList(actions) {
// actions ở đây khác vs action.payload trong slice.js
 try {
   // Gọi đến hàm call API, tham số thứ hai là prop truyền vào API
   const response = yield call(requestGetGuideList, actions.payload);
  console.log(response)
   // Lấy dữ liệu  cần
   const { guides } = response.data.data;
 
   // update lại state
   yield put(setGuideList(guides));
   //  sets đc truyền vào set chính 
   // là action.payload trong slice.js
 } catch (err) {
   console.log(err);
 }
}
 
