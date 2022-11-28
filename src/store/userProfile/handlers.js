import { call, put } from "redux-saga/effects";
import requestGetAllUserProfile from "./callApi";
import { setUserProfile } from "./slice";

export default function* handleGetUserProfile() {
  try {
    const response = yield call(requestGetAllUserProfile);
    // console.log(response);
    const { users } = response.data.data;

    yield put(setUserProfile(users));
  } catch (err) {
    console.log(err);
  }
}
