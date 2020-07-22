
var stars = [];

var speed;

var curAmt = 0;
var rot = 0;

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
  textAlign(CENTER, CENTER);

}

function draw() {
  speed = 25;
  colorMode(RGB);
  let from = color(0, 11, 130);
  let to  = color(29, 4, 110);
  background(lerpColor(from, to, curAmt));
  createSpaceColour();
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }

  textSize(width / 50);
  fill(0);
  noStroke();
  rotate(0);
  text("Lots Of Love Richard xx", 0 + width / 3, 0 + height / 2.5);

  colorMode(RGB);
  angleMode(DEGREES);
  textSize(width / 10);
  rot += 0.5;
  rotate(rot);
  fill(255, 174, 0);
  text("Happy Birthday Dad!", 0, 0);

}

function createSpaceColour(){

    let dir = true;

    if(curAmt <= 0){
        dir = true;
        curAmt = 0;
    } else if (curAmt >= 1) {
        dir = false;
        curAmt = 1;
    }

    if(dir){
      curAmt = curAmt + 0.001;
    } else if (!dir){
      curAmt = curAmt = 0.001;
    }

  }
