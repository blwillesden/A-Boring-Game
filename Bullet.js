// Jitter class
class Bullet {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.diameter = 5;
    this.speed = 12;
    this.color = 'yellow';
  }

  move() {
    this.y -= this.speed
  }

  display() {
    push();
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    pop();
  }
  touch(bug) {
    let d = dist(this.x, this.y, bug.x, bug.y)
    if (d < this.diameter/2 + bug.diameter/2){
     return true; 
    }else{
     return false; 
    }
  }
}
