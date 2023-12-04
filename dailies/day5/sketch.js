let buildings = [];
let stars = [];

function setup() {
  createCanvas(800, 800, document.getElementById('canvas'));
  
  randomSeed(3);
  frameRate(15);
  noStroke();
  
  for (let i = 0; i < 400; i++) {
    stars.push(new Star());
  }
  
  for (let x = 0; x < width; x+=random(75, 150)) {
    buildings.push(new Building(x));
  }
}

function draw() {
  background(14, 5, 100);
  
  for (let star of stars) {
    star.draw();
  }
  
  for (let building of buildings) {
    building.draw();
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.minRadius = random(2, 4);
    this.maxRadius = random(this.minRadius, 12);
  }
  
  draw() {
    const radius = map(noise(this.x * 0.01, this.y * 0.01, millis()/200), 0, 1, this.minRadius, this.maxRadius)
    fill(
      map(noise(this.x * 0.1 + 100, this.y * 0.1, millis()/200), 0, 1, 200, 255), 
      map(noise(this.x * 0.1, this.y * 0.1, millis()/200), 0, 1, 200, 255), 
      0
    );
    circle(this.x, this.y, radius);
  }
}

class Building {
  constructor(x) {
    this.x = x;
    this.w = random(100, 300);
    this.h = random(400, 700);
    this.hue = random(25, 100);

    this.windowsX = floor(random(2, this.w/30));
    this.windowsY = floor(random(5, this.h/30));
    this.spaceX = floor(random(20, this.w/15));
    this.spaceY = floor(random(15, this.h/30));
  }
  
  draw() {
    fill(this.hue, this.hue, this.hue);
    rect(this.x, height - this.h, this.w, this.h);

    const ww = (this.w - this.spaceX - (this.spaceX * this.windowsX)) / this.windowsX;
    const wh = (this.h - this.spaceY - (this.spaceY * this.windowsY)) / this.windowsY;
    for (let i = 0; i < this.windowsX; i++) {
      for (let j = 0; j < this.windowsY; j++) {
        fill(
          map(noise(i, j, millis()/200), 0, 1, 200, 255), 
          map(noise(i + 100, j, millis()/1000), 0, 1, 200, 255), 
          0
        );
        const wx = this.x + this.spaceX + (i * (ww + this.spaceX));
        const wy = height - this.h + this.spaceY + (j * (wh + this.spaceY));

        rect(wx, wy, ww, wh);
      }
    }
  }
}
