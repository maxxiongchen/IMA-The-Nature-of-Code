// IMA NYU Shanghai
// The Nature of Code
// MOQN
// Feb 22 2017


var vector;

function setup() {
  createCanvas(500, 500);
  fill(255);
  stroke(255);
}

function draw() {
  background(0);
  vector = createVector(mouseX, mouseY);
  
  vector.limit(350); //constrain the magnitude

  ellipse(0, 0, 10, 10);
  ellipse(vector.x, vector.y, 10, 10);

  var magitude = vector.mag();
  
  // let's visualize the vector!
  line(0, 0, vector.x, vector.y);
  text(round(magitude), vector.x+10, vector.y);
}