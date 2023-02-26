let cnv;
let r= 320
let r2 =344


function setup() {
  cnv = createCanvas(800, 800);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  background(0);
  angleMode(DEGREES);
  noFill()
  stroke(255)
  textSize(20)
  textAlign(CENTER,CENTER )
  
}

function draw(){
  background(255)
  stroke(0)
  translate(width/2,height/2);
  ellipse(0,0,r*2);
  dcd(60);
}

function dcd(nod){
    let step = floor(360/nod)
    let num =0
    for (let a = 0; a <360;  a+=step ){
        let x = cos(a) *r
        let y = sin(a) *r
        let tx = cos(a)*(r2)
        let ty = sin(a)*(r2) 
        strokeWeight(3)
        stroke(0)
        fill(255)
        ellipse(x,y,20,20)
        fill(0)
        noStroke()
        text(num,tx,ty)
        noFill()
        num++

    }
}


function keyPressed() {
    if (key === 's') {
      saveCanvas('circledot1', 'png');
      print("boo")
    }
  }