let socket;

function setup() {
  createCanvas(800, 500);
  background("black");
  socket = io.connect("http://localhost:3000");

  socket.on("mouse", newDrawing);
}

function newDrawing(data) {
  noStroke();
  fill(255);
  ellipse(data.x, data.y, 36, 36);
}

function mouseDragged() {
  console.log("sending", mouseX, mouseY);
  let data = {
    x: mouseX,
    y: mouseY,
  };

  socket.emit("mouse", data);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 36, 36);
}

function draw() {}
