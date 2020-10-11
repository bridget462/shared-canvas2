const express = require("express");
const socket = require("socket.io");

const app = express();
const server = app.listen(3000);
const io = socket(server);

app.use(express.static("./public"));

function newConnection(socket) {
  console.log("new connection", socket.id);

  // when client share mousePosition
  socket.on("mouse", shareMousePosition);

  function shareMousePosition(mousePosition) {
    socket.broadcast.emit("mouse", mousePosition);
    console.log(mousePosition);
  }
}

io.sockets.on("connection", newConnection);
