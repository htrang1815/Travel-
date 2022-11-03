import { takeLatest } from "redux-saga/effects";
import { getIsLogin } from "./slice";
import handleGetIsLoggin from "./handlers";

export default function* authSaga() {
  yield takeLatest(getIsLogin.type, handleGetIsLoggin);
}
