function inactiveplayership() {
  push();
  noStroke('#00FF00');
  fill('#00FF00')
  triangle(width/2 + 20, height - 30,
           width/2 - 20, height - 30,
           width/2, height - 60)  //Ship Head
  fill('#00DD00')
  triangle(width/2 - 20, height - 30,
           width/2 - 15, height - 20,
           width/2 - 30, height - 5)
  triangle(width/2 + 20, height - 30,
           width/2 + 15, height - 20,
           width/2 + 30, height - 5)
  triangle(width/2 - 20, height - 30,
           width/2, height,
           width/2 + 20, height - 30)
  fill('#00AA00')
  triangle(width/2 + 15, height - 30,
           width/2 - 15, height - 30,
           width/2, height - 55)
  triangle(width/2 - 15, height - 30,
           width/2, height,
           width/2 + 15, height - 30)
  fill('#00DD00')
  rect(width/2 - 13, height - 25, 27, 5)
  pop();
  fill('#fca503')
  push();
  stroke('#fca503')
  triangle(width/2 + 13, height - 20,
           width/2 - 13, height - 20,
           width/2, height)  //Flame
  fill('#ffcf0f')
  if(frameCount%5 == 0){
    triangle(width/2 + 7, height - 20,
             width/2 - 7, height - 20,
             width/2, height - 10)
  }else{
    triangle(width/2 + 10, height - 20,
             width/2 - 10, height - 20,
             width/2, height - 5)
  }
 }