import { call, put } from "redux-saga/effects";
import requestGetLogin from "./callApi";
import { setIsLogin, setUser } from "./slice";

export default function* handleGetIsLogin() {
  try {
    const response = yield call(requestGetLogin);
    const { isLogin, user } = response.data;
    console.log({ isLogin, user });
    yield put(setIsLogin(isLogin));
    yield put(setUser(user));
  } catch (err) {
    console.log(err);
  }
}
