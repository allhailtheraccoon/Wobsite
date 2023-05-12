let t = 0;
let state = 0;
let smileyx = 0;
let smileyy = 0;
let smileyxv= 0;
let smileyyv= 0;
var sound1;
var sound2;
var sound3;
var sound3playing = 0;
var sound2playing = 0;
let rows, cols, vectors;
let px = [];
let py = [];
let pc = [];
let ps = [];
let nump = 1500; //number of points
let sc = 2;

let sd = [10,67,73,34,21,2,23,78,81,12] //starting diameter
let t2 = 0;   //time  2
let rdr1 = 20;//random diameter range  1
let rdr2 = 20;//random diameter range  2
let rd1 = 0;  //random diameter  1
let rd2 = 0;  //random diameter  2
let rx = [];  //random x coord
let ry = [];  //random z coord, just messin with you, it's the y coord

var ssruletable = [];
var ssruletabledistance = [];
var ssruletabledistance2 = [];
var ssspeedy = [];
var ssnumstates = 5;
var ssc = [];
var ssx = [];
var ssy = [];
var ssxv = [];
var ssyv = [];
var ssxa = [];
var ssya = [];
var ssf = 0;
var ssdx = 0;
var ssdy = 0;
var ssg = -0.1;
var ssfirstq = 0;

function preload(){
  sound1 = loadSound("bell.wav");
  sound2 = loadSound("fog.mp3");
  sound3 = loadSound("Ba-Song2.mp3");
  //img = loadImage('');
}

function setup() {
  textFont("MuseoModerno")
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
  
  for(var i = 0; i<ssnumstates*ssnumstates; i++){
      ssruletable.push(random(-0.1,0.1));
      ssruletabledistance.push(random(90,90));
      ssruletabledistance2.push(random(0,80));

  }
  for(var i=0; i<200; i++){
      ssc[i] = floor(random(0,ssnumstates));
      ssx[i]=random(0,width);
      ssy[i]=random(0,height);
      ssxv[i]=0;
      ssyv[i]=0;
      ssxa[i]=0;
      ssya[i]=0;
      ssspeedy[i]=1.5;//0.5+c[i]/(numstates-1);
  }
  frameRate(500);
}

function draw() {
  
  //print(state);
  
  if(state==0){
    colorMode(HSB)
    background(0,0,0);
    translate(width/2, height/2);
    stroke(255,100,100);
    strokeWeight(4);
    textSize(35);
    fill((240+360*(sin(t)+1)/2)%360,100,100);
    text("test website",-44,25);
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
    text("to the",-152,25);
    textSize(10);
    noStroke();
    fill((0+360*(sin(t)+1)/2)%360,100,100);
    text("double-click to go forward",-54,0);
    fill(0);
  }//opening page


  if(state==1){
    colorMode(HSB);
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
    textSize(15);
    text("Squiggly Blobs",width-200,157);
    
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
    colorMode(HSB)
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
    if(sound3playing==0){
      sound3.play();
    }
    sound3playing=1;
    colorMode(HSB);
    background(0,100,0);

    for(var j=0; j<10; j++){
      rx[j] = (1400*sqrt(noise(t+j))-205);
      ry[j] = 50+(600*(noise(0,t2+j))-5);
    }
    for(var j=0; j<10; j++){
      //stroke(360*noise(0,t2,j)+random(90),100,100);
      noStroke(); 
      fill(360*(sq(noise(j,t2))+2*noise(j,t2))/2,100-0.5*sqrt(noise(0,j,t2)),100+0*sqrt(noise(t2,0,j)),(noise(t2,j)))
      beginShape();
      for(var i = 0; i<2*PI; i+=PI/64){
        rd1 = 10*noise(j,t,i+t)*rdr1;
        rd2 = 10*noise(t2,j,i+t)*rdr2;
        vertex(rx[j]+(sd[j]+rd1)*sin(i)+110*j-525,ry[j]+(sd[j]+rd2)*cos(i));  
      }
      endShape(CLOSE);
    }
    t2+=0.00618;
  }

  
  if(state==4){
    background(50,100,100);
  }


  if(state==5){
    colorMode(RGB);
    if(ssfirstq===0){
      background(50, 20, 30);
    }
    ssfirstq=1;
    for(var i=0; i<ssruletable.length+1; i++){
        stroke(255, 255, 255);
        //text(ruletable[i],10,10 + 10*i);
    }
    for(var i=0; i<ssruletabledistance.length; i++){
        stroke(255, 255, 255);
        //text(floor(ruletabledistance[i]),49,10 + 10*i);
    }
    for(var i=0; i<ssruletabledistance2.length; i++){
        stroke(255, 255, 255);
        //text(floor(ruletabledistance2[i]),73,10 + 10*i);
    }
    for(var i = 0; i<200; i++){
        ssxa[i]=0;
        ssya[i]=0;
        for(var j=0; j<200; j++){
            ssdx = (ssx[j]-ssx[i]);
            ssdy = (ssy[j]-ssy[i]);
            if(sqrt(sq(ssdx)+sq(ssdy))>ssruletabledistance2[ssc[i]+ssc[j]*ssnumstates]){
                if(sqrt(sq(ssdx)+sq(ssdy))<ssruletabledistance[ssc[i]+ssc[j]*ssnumstates]){
                    if(i === j){
                        }
                    else{
                        if(ssc[i] === ssc[j]){
                            ssg = -0.1;
                        }
                        else{
                            //ssg = -0.3;
                        }
                        if(ssc[i] === (1+ssc[j])%ssnumstates){
                            ssg = 1;
                        }
                        if(ssc[i] === (2+ssc[j])%ssnumstates){
                            ssg = -0.3;
                        }

                        //ssg = ssruletable[ssc[i]+ssc[j]*ssnumstates];
                        ssf = ssg/sqrt(sq(ssdx)+sq(ssdy));
                        ssxa[i] += ssf*ssdx;
                        ssya[i] += ssf*ssdy;
                    }
                }
            }
        }
        //xa[i]/=1.000;
        //ya[i]/=1.000;
        ssxv[i]=(ssxv[i]+ssxa[i])/ssspeedy[i];
        ssyv[i]=(ssyv[i]+ssya[i])/ssspeedy[i];
        
        ssx[i]+=ssxv[i];
        ssy[i]+=ssyv[i];
        if(ssx[i]<10){
            ssxv[i]*=-1;
            ssx[i]+=10;
        }
        if(ssy[i]<10){
            ssyv[i]*=-1;
            ssy[i]+=10;
        }
        if(ssx[i]>width-10){
            ssxv[i]*=-1;
            ssx[i]-=10;
        }
        if(ssy[i]>height-10){
            ssyv[i]*=-1;
            ssy[i]-=10;
        }
        //println(x[i]);
        strokeWeight(2);
        if(ssc[i]===0){
            stroke(200, 0, 0);
        }
        if(ssc[i]===1){
            stroke(0, 200, 0);
        }
        if(ssc[i]===2){
            stroke(0, 0, 200);
        }
        if(ssc[i]===3){
            stroke(200, 200, 0);
        }
        if(ssc[i]===4){
            stroke(200, 44, 200);
        }
        point(ssx[i],ssy[i]);
    }
      
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
