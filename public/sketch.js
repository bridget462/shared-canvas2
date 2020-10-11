let socket;

function setup() {
  createCanvas(800, 500);
  socket = io.connect("http://localhost:3000");
}

function draw() {
  background("black");
  rect(100, 200, 75, 125);
}
