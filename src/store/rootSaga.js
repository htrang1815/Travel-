import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/saga";
import guideListSaga from "./guideList/saga";
import projectSaga from "./project/saga";
import projectListSaga from "./projectList/saga";
import projectInTourSaga from "./review/saga";
import guideSaga from "./guide/saga";

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(projectListSaga),
    fork(projectSaga),
    fork(guideListSaga),
    fork(projectInTourSaga),
    fork(guideSaga),
  ]);
}
