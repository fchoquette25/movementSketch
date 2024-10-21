let speedX, speedY;
let colorVal; 

function setup() {
  createCanvas(500, 500);
  
  x = width / 2;
  y = height / 2;
  
  speedX = random(4);
  speedY = random(4);
  
  colorVal = random(x);
}

function draw() {
  background(255);
  
  x += speedX;
  y += speedY;
  
  if (x > width || x < 0) 
    speedX *= -1;
    
  if (y > height || y < 0) {
    speedY *= -1;
  }
  
  let r = random(250);
  let g = random(255);
  let b = colorVal;
  
  fill(r, g, b);
  rect(x, y, 100, 100);
}