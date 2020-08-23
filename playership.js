function playership() {
  push();
  noStroke('#00FF00');
  fill('#00FF00')
  triangle(mouseX + 20, height - 30,
           mouseX - 20, height - 30,
           mouseX, height - 60)  //Ship Head
  fill('#00DD00')
  triangle(mouseX - 20, height - 30,
           mouseX - 15, height - 20,
           mouseX - 30, height - 5)
  triangle(mouseX + 20, height - 30,
           mouseX + 15, height - 20,
           mouseX + 30, height - 5)
  triangle(mouseX - 20, height - 30,
           mouseX, height,
           mouseX + 20, height - 30)
  fill('#00AA00')
  triangle(mouseX + 15, height - 30,
           mouseX - 15, height - 30,
           mouseX, height - 55)
  triangle(mouseX - 15, height - 30,
           mouseX, height,
           mouseX + 15, height - 30)
  fill('#00DD00')
  rect(mouseX - 13, height - 25, 27, 5)
  pop();
  fill('#fca503')
  push();
  stroke('#fca503')
  triangle(mouseX + 13, height - 20,
           mouseX - 13, height - 20,
           mouseX, height)  //Flame
  fill('#ffcf0f')
  if(frameCount%5 == 0){
    triangle(mouseX + 7, height - 20,
             mouseX - 7, height - 20,
             mouseX, height - 10)
  }else{
    triangle(mouseX + 10, height - 20,
             mouseX - 10, height - 20,
             mouseX, height - 5)
  }
 }