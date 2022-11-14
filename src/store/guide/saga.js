import { takeLatest } from "redux-saga/effects";
import handleGetGuideList from "./handlers";
 
import { getGuideList } from "./slice";
 
export default function* guideListSaga() {
 yield takeLatest(getGuideList.type, handleGetGuideList);
 // hàm getSetInfo: ở slice.js
 // hàm handleGetSet: ở handlers.js
}
