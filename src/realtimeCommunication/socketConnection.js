import io from "socket.io-client";
import { setUser } from "../store/auth/slice";
import { setReviewInfoInTour } from "../store/review/reviewSlice";

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

  socket.on("sendReviewToClient", (review) => {
    // console.log(review);
    dispatch(setReviewInfoInTour(review));
  });

  socket.on("sendRemoveFavouriteToClient", (bookmark) => {
    // console.log(review);
    dispatch(setUser(bookmark));
  });
};

export const createReview = (data) => {
  socket.emit("create-comment", data);
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

export const removeFavourite = (data) => {
  // console.log(data);
  socket.emit("remove-favourite", data);
};
