// Jitter class
class Jitter {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = random(10, 30);
    this.speed = 2;
    this.color = 'red';
  }

  move() {
    this.x += this.speed;
    if (this.x + this.diameter / 2 >= width) {
      this.speed = -this.speed
    }
    if (this.x - this.diameter / 2 <= 0) {
      this.speed = -this.speed
    }
  }

  display() {
    push();
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    pop();
  }

  deathPoint() {
    this.x = this.deathX
    this.y = this.deathY
  }
}