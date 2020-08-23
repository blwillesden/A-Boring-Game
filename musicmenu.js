class musicmenu {
  constructor() {
    this.x = (width / 2) - 200;
    this.y = height;
    this.speed = 10
  }

  move() {
    if (this.y > width / 2 - 250) {
      this.y -= this.speed
    } else if (this.y == width / 2 - 250) {
      this.y = (width / 2) - 250
    }
  }
  display(x, y) {
    push();
    textSize(42);
    fill(70);
    stroke(0);
    rect(this.x, this.y, 400, 500)
    noStroke();
    fill(255)
    if (this.y == width / 2 - 250) {
      text('Music', width / 2 - 50, height / 2 - 200)
      fill(150)
      rect(150, 200, 125, 50)
      rect(150, 275, 125, 50)
      rect(150, 350, 125, 50)
      textSize(18)
      fill(255)
      stroke(255)
      line(170, 360, 160, 375)
      line(170, 390, 160, 375)
      line(171, 360, 161, 375)
      line(171, 390, 161, 375) //Left Volume Arrow
      line(255, 360, 265, 375)
      line(255, 390, 265, 375)
      line(254, 360, 264, 375)
      line(254, 390, 264, 375) //Right Volume Arrow
      noStroke();
      text("Change Song", 157, 230)
      text("Mute", 190, 305)
      text("Volume", 180, 380)
      text(round(y * 100), 330, 380)
      text("Current Song", 330, 170)
      if (x < 0) {
        text("None Selected", 330, 230)
      } else if (x == 0) {
        text("Doom - E1M1", 330, 230)
      } else if (x == 1) {
        text("C418 - Stal", 330, 230)
      } else if (x == 2) {
        text("Smokey Bennett &", 300, 215)
        text("The Hoops -", 330, 235)
        text("The Flames of Love", 300, 255)
      } else if (x == 3) {
        text("Elijah Who - Don't", 300, 215)
        text("Worry About Me,", 300, 235)
        text("I'll Be Fine", 330, 255)
      } else if (x == 4) {
        text("Love Song For", 330, 215)
        text("A Dead Man", 330, 235)
      } else if (x == 5) {
        text("Simon Viklund -", 330, 215)
        text("I Will Give You My All", 300, 235)
      }
  }
  }
  delete() {
    this.y = height
  }
}