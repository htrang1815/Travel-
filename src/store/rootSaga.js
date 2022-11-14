import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/saga";
import guideListSaga from "./guide/saga";
import projectSaga from "./project/saga";
import projectListSaga from "./projectList/saga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(projectListSaga), fork(projectSaga), fork(guideListSaga)]);
}


 
