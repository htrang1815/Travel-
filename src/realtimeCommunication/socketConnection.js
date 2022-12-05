import io from "socket.io-client";
import { setUser } from "../store/auth/slice";
import { setBlogList } from "../store/blogList/slice";
import { setGuideList } from "../store/guideList/slice";
// import { setBlogList } from "../store/blogList/slice";
// import { setGuideList } from "../store/guideList/slice";
import { setMyBlog } from "../store/myblog/slice";
import { setMyReview } from "../store/myreview/slice";
import { setProjectList } from "../store/projectList/slice";
// import { setProjectList } from "../store/projectList/slice";
import { setReviewInfoInTour } from "../store/review/reviewSlice";
import { setReviewInfoInGuide } from "../store/reviewGuide/reviewSlice";
import { setReviewList } from "../store/reviewList/slice";
// import { setReviewList } from "../store/reviewList/slice";
import { setUserProfile } from "../store/userProfile/slice";
import domain from "../utils/common";

let socket = io(`${domain}`);

export const connectWithSocketServer = (user, dispatch) => {
  socket = io(`${domain}`, {
    // Truyền dữ liệu ng dùng sang backend
    auth: { user },
    withCredentials: true,
  });

  socket.on("connect", () => {
    console.log("successful connected with socket.io server");
    // console.log(socket.id);
  });

  socket.on("sendUpdateUser", (user) => {
    dispatch(setUser(user));
  });

  socket.on("sendAdminDeleteToClient", (data) => {
    console.log(data);
    // if (path === "userprofile") {
    //   dispatch(setUserProfile(res));
    // } else if (path === "guides") {
    //   dispatch(setGuideList(res));
    // } else if (path === "blogs") {
    //   dispatch(setBlogList(res));
    // } else if (path === "reviews") {
    //   dispatch(setReviewList(res));
    // } else if (path === "projects") {
    //   dispatch(setProjectList(res));
    // }
  });

  socket.on("sendUpdateReview", (review) => {
    // console.log(review);
    dispatch(setMyReview(review));
  });

  socket.on("sendReviewToClient", (review) => {
    // console.log(review);
    dispatch(setReviewInfoInTour(review));
    // dispatch(setReviewInfoInGuide(review));
  });

  socket.on("sendReviewGuideToClient", (review) => {
    // console.log(review);
    dispatch(setReviewInfoInGuide(review));
    // dispatch(setReviewInfoInGuide(review));
  });

  socket.on("sendRemoveFavouriteToClient", (bookmark) => {
    console.log(bookmark);
    dispatch(setUser(bookmark));
  });

  socket.on("sendRemoveMyBlogToClient", (blog) => {
    // console.log(review);
    dispatch(setMyBlog(blog));
  });

  socket.on("sendRemoveMyReviewToClient", (review) => {
    // console.log(review);
    dispatch(setMyReview(review));
  });
};

export const createReview = (data) => {
  socket.emit("create-comment-place", data);
};

export const createReviewGuide = (data) => {
  socket.emit("create-comment-guide", data);
};

export const joinPlace = (data) => {
  socket.emit("join-place", data);
};

export const joinGuide = (data) => {
  socket.emit("join-guide", data);
};

export const joinUser = (data) => {
  // console.log(data);
  socket?.emit("join-user", data);
  // console.log(data);
};

export const adminDelete = (data) => {
  console.log(data);
  console.log(socket);
  socket.emit("admindelete", data);
};

export const updateUser = (values, userId, imageCover, dateOfBirth) => {
  socket.emit("update-user", values, userId, imageCover, dateOfBirth);
};

export const updateReview = (data) => {
  socket.emit("update-review", data);
};

export const removeFavourite = (data) => {
  // console.log(data);
  socket.emit("remove-favourite", data);
};

export const removeMyReview = (data) => {
  // console.log(data);
  socket.emit("remove-myreview", data);
};

export const removeMyBlog = (data) => {
  // console.log(data);
  socket.emit("remove-myblog", data);
};

export const deleteAd = (data) => {
  // console.log(data);
  socket.emit("delete-adpage", data);
};
