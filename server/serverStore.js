const connectedUsers = new Map();

let io = null;

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId });

  console.log("new connected users");
  console.log(connectedUsers);
};

module.exports = {
  addNewConnectedUser,
};
