import { call, put } from "redux-saga/effects";
import requestGetIsLogin from "./callApi";
import { setIsLogin, setUser } from "./slice";

export default function* handleGetIsLoggin() {
  console.log("hello");
  try {
    const response = yield call(requestGetIsLogin);

    const { isLogin, user } = response.data;
    console.log({ isLogin, user });
    yield put(setIsLogin(isLogin));
    yield put(setUser(user));
  } catch (err) {
    console.log(err);
  }
}
