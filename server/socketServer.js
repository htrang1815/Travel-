const Review = require("./models/reviewModel");
const User = require("./models/userModel");
const serverStore = require("./serverStore");
const disconnectHandler = require("./socketHandlers/disconnectHandler");
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");

const resgisterSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  serverStore.setSocketServerInstance(io);

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    // Thêm ng dùng vảo mảng những ng dùng đang online
    newConnectionHandler(socket, io);

    socket.on("join-place", (placeId) => {
      socket.join(placeId);
    });

    socket.on("join-user", (userId) => {
      socket.join(userId);
    });

    socket.on("create-comment", async (review) => {
      // console.log(review.reviews);
      const reviewList = await Review.find({ place: review.reviews.place });

      socket.to(review.reviews.place).emit("sendReviewToClient", reviewList);
    });
    socket.on("remove-favourite", async (data) => {
      const { userId, placeId } = data;
      const user = await User.findById(userId);
      user.bookmark = user.bookmark.filter((place) => place["id"] !== placeId);
      user.save({ validateBeforeSave: false });

      socket.to(userId).emit("sendRemoveFavouriteToClient", user);
    });

    socket.on("disconnect", () => {
      disconnectHandler(socket);
    });
  });
};

module.exports = {
  resgisterSocketServer,
};
