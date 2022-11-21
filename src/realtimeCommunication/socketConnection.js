import io from "socket.io-client";
import { setUser } from "../store/auth/slice";
import { setMyBlog } from "../store/myblog/slice";
import { setMyReview } from "../store/myreview/slice";
import { setReviewInfoInTour } from "../store/review/reviewSlice";
import { setReviewInfoInGuide } from "../store/reviewGuide/reviewSlice";

let socket = null;

export const connectWithSocketServer = (user, dispatch) => {
  socket = io(`http://localhost:3002`, {
    // Truyền dữ liệu ng dùng sang backend
    auth: { user },
  });

  socket.on("connect", () => {
    console.log("successful connected with socket.io server");
    // console.log(socket.id);
  });

  socket.on('sendUpdateUser', (user) =>{
    dispatch(setUser(user))
  })

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
    // console.log(review);
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
  socket.emit("join-user", data);
};

export const updateUser = (values, userId, imageCover,dateOfBirth) =>{
  socket.emit('update-user', values, userId, imageCover,dateOfBirth)
}

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
