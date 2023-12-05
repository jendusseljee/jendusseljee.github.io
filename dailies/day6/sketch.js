const candleThickness = 400;
const candleHeight = 300;

const wickThickness = 20;
const wickHeight = 50;

function setup() {
  createCanvas(800, 800, document.getElementById('canvas'));
  
}

function draw() {
  background(0);
  noStroke();
  
  fill(255, 255, 255)
  rect((width - candleThickness)/2, height-candleHeight, candleThickness, candleHeight);
  rect((width - wickThickness)/2, height-candleHeight-wickHeight, wickThickness, wickHeight);
  
  const flameHeight = map(noise(millis()/1000), 0, 1, 300, 400);
  const flameX = map(noise(millis()/1000 + 100), 0, 1, 350, 450);
  
  fill(255, 255, 0);
  beginShape();
  vertex(width/2, height-candleHeight-wickHeight);
  bezierVertex(
    width/2 - 100,
    height-candleHeight-wickHeight,
    flameX - 100,
    height-candleHeight-wickHeight - flameHeight/2,
    flameX,
    height-candleHeight-wickHeight - flameHeight
  );
  vertex(flameX, height-candleHeight-wickHeight - flameHeight);
  bezierVertex(
    flameX + 100,
    height-candleHeight-wickHeight - flameHeight/2,
    width/2 + 100,
    height-candleHeight-wickHeight,
    width/2,
    height-candleHeight-wickHeight
  );
  endShape();
}