const CNV_WIDTH = 800;
const CNV_HEIGHT = 800;

let noiseScale = 0.3;

let gridX = 15;
let gridY = 15;

let counter = 0;

function setup() {
  createCanvas(CNV_WIDTH, CNV_HEIGHT, document.getElementById('canvas'));
}

function draw() {
  background(255);
  
  for (let x = 0; x < gridX; x++) {
    for (let y = 0; y < gridY; y++) {
      drawShape(x, y);
    }
  }
  
  counter++;
}

function drawShape(i, j) {
  noiseSeed(0);
  const size = 10 + noise(i, j, counter/30) * 70;
  const r = noise(i * noiseScale, j * noiseScale, counter/30 + 100) * 256;
  const g = noise(i * noiseScale, j * noiseScale, counter/30 + 1000) * 256;
  const b = noise(i * noiseScale, j * noiseScale, counter/30 + 10000) * 256;
  
  const x = i*(CNV_WIDTH/gridX) + ((CNV_WIDTH/gridX)/2 - size/2);
  const y = j*(CNV_HEIGHT/gridY) + ((CNV_HEIGHT/gridY)/2 - size/2);
  
  const c = color(0, g, b);
  fill(c);
  noStroke();

  square(x, y, size);
}