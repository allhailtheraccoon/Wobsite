let t = 0;
let state = 0;
let smileyx = 0;
let smileyy = 0;
let smileyxv= 0;
let smileyyv= 0;
var sound1;
var sound2;
var sound2playing = 0;
let rows, cols, vectors;
let px = [];
let py = [];
let pc = [];
let ps = [];
let nump = 1500; //number of points
let sc = 2;

function preload(){
  sound1 = loadSound("bell.wav");
  sound2 = loadSound("fog.mp3");
  //img = loadImage('');
}

function setup() {
  createCanvas(3.4*400, 3.4*200);
  strokeWeight(1);
  colorMode(HSB);
  noFill();
  smileyx = random(0,3.4*400);
  smileyy = random(0,3.4*400);
  rows = height / 20;
  cols = width / 20;
  vectors = create2DArray(rows, cols);
  for(let i =0; i<nump; i++){
    px.push(random(0,1));
    py.push(random(0,1));
    pc.push(0);
    ps.push(random(0,100));
  }
}

function draw() {
  
  //print(state);
  
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
  }//opening page


  if(state==1){
    background(10);    
    fill(185,100,40);
    rect(20,20,3.4*400 - 40,3.4*200 - 40);
    
    let canvas = document.getElementsByTagName("canvas")[0];canvas.style.cursor = "";
    
    fill(120,100,100);
    rect(100,100,100,100);
    stroke(0,100,100);
    fill(50,100,100);
    if(mouseX>100){if(mouseX<200){if(mouseY>100){if(mouseY<200){
      canvas.style.cursor = "pointer";
      stroke(300,100,100);
      fill(250,100,100);
      if(mouseIsPressed==1){
        canvas.style.cursor = "";
        state=2;
        sound1.play();
      }
    }}}}
    textSize(19);
    text("shag carpet",100,156);
    
    fill(120,100,100);
    rect(width-200,100,100,100);
    stroke(0,100,100);
    fill(50,100,100);
    if(mouseX>width-200){if(mouseX<width-100){if(mouseY>100){if(mouseY<200){
      canvas.style.cursor = "pointer";
      stroke(300,100,100);
      fill(250,100,100);
      if(mouseIsPressed==1){
        canvas.style.cursor = "";
        state=3;
        sound1.play();
      }
    }}}}
    textSize(30);
    text("Button2",width-202,160);
    
    fill(120,100,100);
    rect(width-200,height-200,100,100);
    stroke(0,100,100);
    fill(50,100,100);
    if(mouseX>width-200){if(mouseX<width-100){if(mouseY>height-200){if(mouseY<height-100){
      canvas.style.cursor = "pointer";
      stroke(300,100,100);
      fill(250,100,100);
      if(mouseIsPressed==1){
        canvas.style.cursor = "";
        state=4;
        sound1.play();
      }
    }}}}
    textSize(30);
    text("Button3",width-202,height-140);    

    fill(120,100,100);
    rect(100,height-200,100,100);
    stroke(0,100,100);
    fill(50,100,100);
    if(mouseX>100){if(mouseX<200){if(mouseY>height-200){if(mouseY<height-100){
      canvas.style.cursor = "pointer";
      stroke(300,100,100);
      fill(250,100,100);
      if(mouseIsPressed==1){
        canvas.style.cursor = "";
        state=5;
        sound1.play();
      }
    }}}}
    textSize(30);
    text("Button4",100,height-140);

    strokeWeight(4);
    fill(60,100,100);
    stroke(350,100,100);
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
              smileyx=random(0,3.4*400);
              smileyy=random(0,3.4*200);
            }
          }
        }
      }
    }
  }//hungry smiley face four way split


  if(state==2){
    if(sound2playing==0){
      sound2.play();
    }
    sound2playing=1;
    //background(150,100,100);
    fill(0,0,100,0.05);
    rect(0,0,width,height)
    // Update vectors based on noise
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let xoff = j / cols;
        let yoff = i / rows;
        let angle = noise(xoff*sc, yoff*sc, frameCount * 0.001) * TWO_PI * 4;
        vectors[i][j] = p5.Vector.fromAngle(angle);
        vectors[i][j].mult(10);
      }
    }
    for(var i=0; i<nump; i++){
      let angle2 = 1*noise(px[i]*sc, py[i]*sc, frameCount * 0.001) * TWO_PI * 4; 
      angle2 += 4.1*TAU*pow(dist(px[i]*2,py[i],mouseX/width*2,mouseY/height),0.25);
      px[i]+=cos(angle2)/500;
      py[i]+=sin(angle2)/500;
      px[i] = px[i]%1;
      py[i] = py[i]%1;
      strokeWeight(5);
      stroke(0,100,0);
      //print(angle2);
      point(width*px[i],height*py[i]);
    }
    for(var i = 0; i<nump/30; i++){
      px[floor(random(0,nump))] = random(0,1);
      py[floor(random(0,nump))] = random(0,1);
    }
  }//shag carpet


  if(state==3){
    background(100,100,100);
  }

  
  if(state==4){
    background(50,100,100);
  }


  if(state==5){
    background(200,100,100);
  }


  t += 0.01;
  print(state);
}


function doubleClicked() {
  if(state<1){
    state++;
    sound1.play();
  }
}


function create2DArray(rows, cols) {
  let arr = new Array(rows);
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}
