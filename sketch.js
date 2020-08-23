let bullets = [];
let bugs = [];
let totalBugs = 10
let totalStars = 50
let winscreen1;
let musicmenu1;
let menuOpen;
let currentSong = -1;
let currentVol = 0.25;
let frame1;
let frame2;
let frame3;
let frame4;
let kaboom;





function setup() {
  createCanvas(600, 600);
  frameRate(60);

  for (let i = 0; i < totalBugs; i++) {
    bugs.push(new Jitter(random(10, width - 10), random(10, height / 2)))
  }
  winscreen1 = new winscreen(0, height)
  musicmenu1 = new musicmenu(0, height)
  kaboom = new explosion()

}

function draw() {
  if(frameCount <= 120){
   background(frame1) 
  } else if(frameCount <=240){
   background(frame2) 
  } else if(frameCount <= 360){
   background(frame3) 
  } else if(frameCount <= 480){
   background(frame4) 
  }
  if(frameCount > 480){
  background(40, 79, 90);
  playership();
  fill(255);
  stroke(0);
  masterVolume(currentVol)

  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].move();
    bullets[i].display();
    if (bullets[i].y < -5) {
      bullets.splice(i, 1)
    }
  }
  //Display Bugs
  for (let i = bugs.length - 1; i >= 0; i--) {
    bugs[i].move();
    bugs[i].display();
    for (let k = 0; k < bullets.length; k++) {
      if (bullets[k].touch(bugs[i])) {
        bugs[i].deathPoint()
        bugs.splice(i, 1);
        bullets.splice(k, 1);
        break;
      }
    }
  }
  if (bugs.length == 0) {
    winscreen1.display();
    winscreen1.move();
  }
  if (menuOpen == true) {
    musicmenu1.display(currentSong, currentVol);
    musicmenu1.move();
  }
  if (menuOpen == false) {
    musicmenu1.delete();
  }

  }
}


function mousePressed() {
  if (musicmenu1.y >= height) {
    bullets.push(new Bullet(mouseX, height - 60))
  } else if (musicmenu1.y < height) {
  }
  if (mouseX >= 150 && mouseX <= 275 &&
    mouseY >= 200 && mouseY <= 250 &&
    menuOpen == true) {
    if (currentSong < 5) {
      currentSong++
    } else if (currentSong >= 5) {
      currentSong = 0
    }
    if (currentSong == 0) {
    giveyoumyall.stop()
    doom.loop()
  } else if (currentSong == 1) {
    doom.stop()
    stal.loop();
  } else if (currentSong == 2) {
    stal.stop();
    smokey.loop();
  } else if (currentSong == 3) {
    smokey.stop()
    elijah.loop();
  } else if (currentSong == 4) {
    elijah.stop();
    lovesong.loop();
  } else if (currentSong == 5) {
    lovesong.stop();
    giveyoumyall.loop();
  }
}
  if (mouseX >= 150 && mouseX <= 275 &&
    mouseY >= 275 && mouseY <= 350 &&
    menuOpen == true){
    currentVol = 0
  }
  if (mouseX >= 150 && mouseX <= 190 &&
    mouseY >= 350 && mouseY <= 425 &&
    menuOpen == true){
    currentVol = currentVol - 0.05
  }else
  if (mouseX >= 255 && mouseX <= 275 &&
    mouseY >= 350 && mouseY <= 425 &&
    menuOpen == true){
    currentVol = currentVol + 0.05
  }
  if (currentVol <=0){
    currentVol = 0
  }
  if (currentVol >=1){
    currentVol = 1
  }  
}

function keyPressed() {
  if (keyCode == ENTER && bugs.length == 0) { //Restarts Game if in Win Screen
    restart();
  } else if (keyCode == UP_ARROW) {
    menuOpen = true;
  } else if (keyCode == DOWN_ARROW) {
    menuOpen = false;
  } else if (keyCode == 32 && bugs.length == 0) {
    startNext();
  }
}

