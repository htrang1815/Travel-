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

    socket.on("create-comment", (review) => {
      // console.log(review);
      socket.to(review.place).emit("sendReviewToClient", review);
    });

    socket.on("disconnect", () => {
      disconnectHandler(socket);
    });
  });
};

module.exports = {
  resgisterSocketServer,
};
