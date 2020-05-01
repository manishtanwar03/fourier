function setup() {
  createCanvas(windowWidth, 600);
  slider = createSlider(1, 30, 1);
}
let slider;
const speed = 0.01;
let time = 0;
let wave = [];

function draw() {
  let x = 0;
  let y = 0;
  background(0);
  translate(200, 350);

  for (let i = 0; i < slider.value(); i++) {
    let preX = x;
    let preY = y;
    let n = 2 * i + 1;
    let radius = 100 * (4 / (n * PI));

    x += radius * cos(n*time);
    y += radius * sin(n*time);

    // circle
    noFill();
    stroke(255, 100);
    ellipse(preX, preY, radius * 2);

    //point
    stroke(255);
    line(preX, preY, x, y);
    stroke(255, 100);
    ellipse(x, y, 10);

    time += speed;
    preX = x;
    preY = y;
  }

  wave.unshift(y);
  // draw
  stroke(255);
  noFill();
  beginShape();
  wave.forEach((point, index) => vertex(200 + index, point));
  line(x,y,200,wave[0]);
  endShape();

  if (wave.length > windowWidth-400) wave.pop();
}
