const CNV_SIZE = 800;

let noiseScale = 0.05;

let gridSize = 30;

let counter = 0;

function setup() {
  createCanvas(CNV_SIZE, CNV_SIZE, document.getElementById('canvas'));
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
  
  const rotation = noise(i * noiseScale, j * noiseScale, counter/30) * Math.PI * 2;
  
  const x = i*(CNV_SIZE/gridSize) + (CNV_SIZE/gridSize)/2;
  const y = j*(CNV_SIZE/gridSize) + (CNV_SIZE/gridSize)/2;
  
  const x2 = x + Math.sin(rotation) * (size);
  const y2 = y + Math.cos(rotation) * (size);
  
  line(x, y, x2, y2);
}