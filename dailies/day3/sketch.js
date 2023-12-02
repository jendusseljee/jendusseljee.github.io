const CNV_SIZE = 800;

let noiseScale = 0.2;

let gridSize = 40;

let counter = 0;

function setup() {
  createCanvas(CNV_SIZE, CNV_SIZE, document.getElementById('canvas'));
  fill(1);
}

function draw() {
  background(255);
  
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      drawLine(x, y);
    }
  }
  
  counter++;
}

function drawLine(i, j) {
  const size = CNV_SIZE / gridSize;
  
  const x = i*(CNV_SIZE/gridSize) + (CNV_SIZE/gridSize)/2;
  const y = j*(CNV_SIZE/gridSize) + (CNV_SIZE/gridSize)/2;
  
  const darkness = noise(i * noiseScale, j * noiseScale, frameCount / 60);
  const radius = gridSize * darkness / 1.5;
  ellipse(x, y, radius, radius);
}