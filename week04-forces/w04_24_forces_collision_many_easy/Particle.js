"use strict";

class Particle {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.rad = 3 * this.mass;
    this.color = color(255);
  }
  applyForce(f) {
    f.div(this.mass);
    this.acc.add(f);
  }
  checkCollision(other) {
    var distance = this.pos.dist(other.pos);
    if (distance < this.rad + other.rad) {
      this.color = color(255,0,0);
      
      var force = p5.Vector.sub(other.pos, this.pos);
      force.mult(-1);
      force.mult(0.1);
      this.applyForce(force);
      
      var force = p5.Vector.sub(this.pos, other.pos);
      force.mult(-1);
      force.mult(0.1);
      other.applyForce(force);
      
    } else {
      this.color = color(255);
    }
  }
  checkEdges() {
    if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.x = -this.vel.x;
    } else if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.x = -this.vel.x;
    }
    if (this.pos.y < 0) {
      this.pos.y = 0;
      this.vel.y = -this.vel.y;
    } else if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y = -this.vel.y;
    }
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    fill(this.color);
    ellipse(0, 0, this.rad * 2, this.rad * 2);
    pop();
  }
}