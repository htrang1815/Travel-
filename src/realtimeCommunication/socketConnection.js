import io from "socket.io-client";
import domain from "../utils/common";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  socket = io(`${domain}`);

  socket.on("connect", () => {
    console.log("successful connected with socket.io server");
    // console.log(socket.id);
  });
};
