import { takeLatest } from "redux-saga/effects";
import handleGetIsLoggin from "./handlers";
import { getIsLogin } from "./slice";

export default function* authSaga() {
  yield takeLatest(getIsLogin.type, handleGetIsLoggin);
}
