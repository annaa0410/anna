function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  rectMode(CENTER)
  background(0);
  noFill()
  stroke(255)
  
  var w=mouseX/10
  for(var j=0;j<height;j++)
  {
    for(var i=0;i<width/50;i++)
    {
      stroke(255,255,0)
    ellipse(25+50*i,25+50*j,w)
    stroke(255)
    rect(25+50*i,25+50*j,mouseY/4)
    ellipse(50+50*i,50,+50*j,25)
    }
  }
}
