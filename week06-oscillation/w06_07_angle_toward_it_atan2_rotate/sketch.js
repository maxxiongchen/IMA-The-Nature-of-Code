// IMA NYU Shanghai
// the Nature of Code
// MOQN
// Mar 16 2017


function setup() {
  createCanvas(500, 600);
  background(0);
}


function draw() {
  background(0);

  var centerVector = createVector(width / 2, height / 2);
  var mouseVector = createVector(mouseX, mouseY);

  var angle = atan2(mouseVector.y - centerVector.y, mouseVector.x - centerVector.x);
  
  fill(255);
  stroke(255);
  line(centerVector.x, centerVector.y, mouseVector.x, mouseVector.y);
  text(round(degrees(angle)), mouseVector.x, mouseVector.y);

  fill(255, 0, 0);
  noStroke();
  translate(width / 2, height / 2);
  rotate(angle);
  triangle(20, 0, -20, -10, -20, 10);
}