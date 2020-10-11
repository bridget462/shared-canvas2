let socket;

function setup() {
  createCanvas(800, 500);
  background("grey");
  socket = io.connect("http://localhost:3000");

  // when shared mouse position is sended from server
  socket.on("mouse", receivedDrawing);
}

function drawEllipse(x, y) {
  noStroke();
  fill(255);
  ellipse(x, y, 36, 36);
}

function drawLine(px, py, x, y) {
  strokeWeight(4);
  stroke("rgb(0,255,0)");
  line(px, py, x, y);
}

function receivedDrawing(receivedMousePosition) {
  drawLine(
    receivedMousePosition.px,
    receivedMousePosition.py,
    receivedMousePosition.x,
    receivedMousePosition.y
  );
}

function mouseDragged() {
  console.log("sending", mouseX, mouseY);
  let mousePosition = {
    px: pmouseX,
    py: pmouseY,
    x: mouseX,
    y: mouseY,
  };

  // send to server
  socket.emit("mouse", mousePosition);

  drawLine(
    mousePosition.px,
    mousePosition.py,
    mousePosition.x,
    mousePosition.y
  );
}
