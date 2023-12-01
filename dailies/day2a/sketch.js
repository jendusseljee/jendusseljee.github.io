const CNV_SIZE = 800;

let noiseScale = 0.04;

let gridSize = 40;

let shapes = [];
let rowOffsets = [];

function setup() {
  createCanvas(CNV_SIZE, CNV_SIZE, document.getElementById('canvas'));
  
  for (let i = 0; i < (gridSize+1) * gridSize; i++) {
    let c = color(random(256), random(256), random(256));
    let shape = random(['square', 'circle']);
    shapes[i] = {
      color: c,
      shape: shape
    };
  }
  
  for (let i = 0; i < gridSize; i++) {
    rowOffsets[i] = 0.0;
  }
}

function draw() {
  background(255);
  
  for (let x = 0; x < gridSize+1; x++) {
    for (let y = 0; y < gridSize; y++) {
      drawCircle(x, y);
    }
  }
}

function drawCircle(i, j) {
  const size = CNV_SIZE / gridSize;
  
  const shape = shapes[i*gridSize + j]
  
  rowOffsets[j] = rowOffsets[j] + noise(j * 0.5, frameCount/100) * 0.5 + 0.02;
  
  fill(shape.color);
  noStroke();
  let x, y;
  
  switch (shape.shape) {
    case 'circle':
      x = ((i*((CNV_SIZE+20)/gridSize) + ((CNV_SIZE+20)/gridSize)/2 + rowOffsets[j]) % (CNV_SIZE+40))-20;
      y = j*(CNV_SIZE/gridSize) + (CNV_SIZE/gridSize)/2;
      
      circle(x, y, size);
      break;
    case 'square':
      x = ((i*((CNV_SIZE+20)/gridSize)+ rowOffsets[j]) % (CNV_SIZE+40))-20;
      y = j*(CNV_SIZE/gridSize);
      
      square(x, y, size);
      break;
  }
  
}

class Circle {
  
}