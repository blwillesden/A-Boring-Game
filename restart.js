 let x = 0;

function restart() {
  clear();
  createCanvas(600, 600);
  for (let i = 0; i < totalBugs; i++) {
    bugs.push(new Jitter(random(10, width - 10), random(10, height / 2)))
  }
  winscreen1 = new winscreen(0, height)
  background(50, 89, 100);
  push();
  playership();
  pop();
}

function startNext(){
  x += 5;
  clear();
  createCanvas(600, 600);
  for (let i = 0; i < totalBugs + x; i++) {
    bugs.push(new Jitter(random(10, width - 10), random(10, height / 2)))
  }
  winscreen1 = new winscreen(0, height)
  background(50, 89, 100);
  push();
  playership();
  pop();
}
