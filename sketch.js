let t = 0;
let state = 0;
let smileyx = 3.4*200;
let smileyy = 3.4*100;
let smileyxv= 0;
let smileyyv= 0;
function setup() {
  createCanvas(3.4*400, 3.4*200);
  strokeWeight(1);
  colorMode(HSB);
  noFill();
}

function draw() {
  print(state);
  
  if(state==0){
    background(0);
    translate(width/2, height/2);
    stroke(255,100,100);
    strokeWeight(4);
    textSize(35);
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
    textSize(10);
    noStroke();
    fill((0+360*(sin(t)+1)/2)%360,100,100);
    text("double-click to go forward",-54,0);
    fill(0);
  }
  if(state==1){
    background(10);
    fill(10);
    rect(20,20,3.4*400 - 40,3.4*200 - 40)
    strokeWeight(4)
    stroke(350,100,100)
    textSize(35);
    text("beware the hungry smiley face",3.4*200-230,3.4*100)
    if(mouseX>smileyx){
      smileyxv+=0.2;
    }
    if(mouseY>smileyy){
      smileyyv+=0.2;
    }
    if(mouseX<smileyx){
      smileyxv-=0.2;
    }
    if(mouseY<smileyy){
      smileyyv-=0.2;
    }
    smileyxv*=0.95;
    smileyyv*=0.95;
    smileyx+=smileyxv;
    smileyy+=smileyyv;
    strokeWeight(1);
    fill(65,100,100);
    stroke(200,100,100);
    ellipse(smileyx,smileyy,50,50);
    fill(0,100,100);
    stroke(200,100,100);
    ellipse(smileyx-10,smileyy-10,10,10);
    ellipse(smileyx+10,smileyy-10,10,10);
    arc(smileyx,smileyy+4,30,20,0,PI)
    if(mouseX>20){
      if(mouseX<3.4 * 400 - 20){
        if(mouseY>20){
          if(mouseY<3.4 * 200 - 20){
            if(dist(mouseX,mouseY,smileyx,smileyy)<20){
              state--;
              smileyx=3.4*200;
              smileyy=3.4*100;
            }
          }
        }
      }
    }
  }
  t += 0.01;
}
function doubleClicked() {
  if(state<1){
    state++;
  }
}
