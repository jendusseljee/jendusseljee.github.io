const CNV_SIZE = 800;
const gridCount = 100;

let smoothingSlider;

let noiseScale = 0.05;
let noiseAmp = 20;

const gridSize = CNV_SIZE / gridCount;

function setup() {
  createCanvas(CNV_SIZE, CNV_SIZE, document.getElementById('canvas3'));
}

function draw() {
  background(255);
  
  for (let i = 0; i < gridCount; i++) {
    for (let j = 0; j < gridCount; j++) {
      const p1 = getPoint(i, j);
      const p2 = getPoint(i+1, j);
      const c1 = getPoint(i-1, j);
      
      line(
        p1.x, 
        p1.y,  
        p2.x, 
        p2.y
      );
    }
  }
}

function getPoint(i, j) {
  const x = i*gridSize;
  const y = (j + noise(i * noiseScale, j * noiseScale, frameCount/60) * noiseAmp)*gridSize - 50;
  
  return {x, y};
}
