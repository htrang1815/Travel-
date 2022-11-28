import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/saga";
import guideListSaga from "./guideList/saga";
import projectSaga from "./project/saga";
import projectListSaga from "./projectList/saga";
import projectInTourSaga from "./review/saga";
import guideSaga from "./guide/saga";
import reviewInGuideSaga from "./reviewGuide/saga";
import blogListSaga from "./blogList/saga";
import blogSaga from "./blog/saga";
import myBlogSaga from "./myblog/saga";
import myReviewSaga from "./myreview/saga";
import userProfileSaga from "./userProfile/saga";

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(projectListSaga),
    fork(projectSaga),
    fork(projectInTourSaga),
    fork(guideListSaga),
    fork(guideSaga),
    fork(reviewInGuideSaga),
    fork(blogListSaga),
    fork(blogSaga),
    fork(myBlogSaga),
    fork(myReviewSaga),
    fork(userProfileSaga),
  ]);
}
