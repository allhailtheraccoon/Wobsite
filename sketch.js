let t = 0;
function setup() {
  createCanvas(400, 400);
  strokeWeight(1);
  colorMode(HSB);
  noFill();
}

function draw() {
  background(0);
  translate(width/2, height/2);
  stroke(255,100,100);
  strokeWeight(4);
  fill((240+360*(sin(t)+1)/2)%360,100,100);
  text("test website",-47,25);
  strokeWeight(1);
  noFill()
  beginShape();
  for (let angle = 0; angle < 360; angle++) {
    let xoff = map(cos(angle), -1, 1, 0, 2);
    let yoff = map(sin(angle), -1, 1, 0, 2);
    let r = noise(xoff, yoff, t) * 200 + 50;
    let x = r * cos(angle);
    let y = r * sin(angle);
    stroke((120+360*(sin(t)+1)/2)%360, 100, 100);
    vertex(x, y);
  }
  endShape(CLOSE);
  stroke(255,100,100);
  strokeWeight(4);
  fill((240+360*(sin(t)+1)/2)%360,100,100);
  textSize(35);
  text("welcome",-65,-10);
  text("to the",-145,25);
  fill(0);
  t += 0.01;
}



