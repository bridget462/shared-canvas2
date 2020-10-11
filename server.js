const express = require("express");
const socket = require("socket.io");

const app = express();
const server = app.listen(3000);
const io = socket(server);

app.use(express.static("./public"));

function newConnection(socket) {
  console.log("new connection", socket.id);

  socket.on("mouse", mouseMsg);

  function mouseMsg(mousePosition) {
    socket.broadcast.emit("mouse", mousePosition);
    console.log(mousePosition);
  }
}

io.sockets.on("connection", newConnection);
