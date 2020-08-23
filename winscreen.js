class winscreen {
  constructor(x, y) {
    this.x = x;
    this.y = y + 300;
    this.speed = 5
  }

  move() {
    if(this.y > 0){
    this.y -= this.speed
    }else if(this.y == 0){
    this.y = 0
    }

  }


  display() {
    push();
    textSize(42);
    fill(255);
    noStroke();
    text('Good Job!', width / 2 - 100, height / 2)
      rect(this.x, this.y, 600, 600);
      if(this.y == 0){
      fill(0);
      textSize(42);
      text('You done gone and done it!', 50, 300);
      textSize(18);
      text('Press ENTER to Start Again', 170, 350)
      text('Or Press SPACE to Move On', 170, 370)
      
    }
  }
}