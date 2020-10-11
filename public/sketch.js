let socket;

function setup() {
  createCanvas(800, 500);
  background("black");
  socket = io.connect("http://localhost:3000");

  // when mouse event is received
  socket.on("mouse", receivedDrawing);
}

function receivedDrawing(receivedMousePosition) {
  drawLine(receivedMousePosition.x, receivedMousePosition.y);
}

function drawLine(x, y) {
  noStroke();
  fill(255);
  ellipse(x, y, 36, 36);
}

function mouseDragged() {
  console.log("sending", mouseX, mouseY);
  let mousePosition = {
    x: mouseX,
    y: mouseY,
  };

  // send to server
  socket.emit("mouse", mousePosition);

  drawLine(mouseX, mouseY);
}

function draw() {}
