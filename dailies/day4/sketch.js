function setup() {
  createCanvas(800, 800, document.getElementById('canvas3'));
  
  randomSeed(3);
  noLoop();
}

function draw() {
  background(14, 5, 150);
  
  for (let i = 0; i < 400; i++) {
    drawStar();
  }
  
  for (let x = 0; x < width; x+=random(75, 150)) {
    drawBuilding(x);
  }
}

function drawStar() {
  const x = random(width);
  const y = random(height);
  const r = random(2, 8);
  
  fill(random(200, 255), random(200, 255), 0);
  circle(x, y, r);
}

function drawBuilding(x) {
  const w = random(100, 300);
  const h = random(400, 700);
  const hue = random(25, 100);
  
  const windowsX = floor(random(2, w/30));
  const windowsY = floor(random(5, h/30));
  const spaceX = floor(random(20, w/15));
  const spaceY = floor(random(15, h/30));
  
  fill(hue, hue, hue);
  rect(x, height - h, w, h);
  
  fill(random(200, 255), random(200, 255), 0);
  const ww = (w - spaceX - (spaceX * windowsX)) / windowsX;
  const wh = (h - spaceY - (spaceY * windowsY)) / windowsY;
  for (let i = 0; i < windowsX; i++) {
    for (let j = 0; j < windowsY; j++) {
      const wx = x + spaceX + (i * (ww + spaceX));
      const wy = height - h + spaceY + (j * (wh + spaceY));
      
      rect(wx, wy, ww, wh);
    }
  }
}
