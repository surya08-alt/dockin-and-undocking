var hasdocked=false

function preload(){
  issimg=loadImage("iss.png")
  spacebgimg=loadImage("spacebg.jpg")
  spacecraft1img=loadImage("spacecraft1.png")
  spacecraft2img=loadImage("spacecraft2.png")
  spacecraft3img=loadImage("spacecraft3.png")
  spacecraft4img=loadImage("spacecraft4.png")
}


function setup() {
  createCanvas(800,400);
  iss=createSprite(200,150,12,15)
  iss.addImage(issimg)
  iss.scale=0.5
  spacecraft=createSprite(200,300,10,10)
  spacecraft.addImage(spacecraft1img)
  spacecraft.scale=0.2
}

function draw() {
  background(spacebgimg);
  if(!hasdocked){
    if(keyDown("up")){spacecraft.y=spacecraft.y-5}
    if(keyDown("down")){spacecraft.addImage(spacecraft2img)}
    if(keyDown("right")){spacecraft.x=spacecraft.x+5;spacecraft.addImage(spacecraft4img)}
    if(keyDown("left")){spacecraft.x=spacecraft.x-5;spacecraft.addImage(spacecraft3img)}
  }  
  if(spacecraft.x<=200&&spacecraft.y<=170){hasdocked=true;textSize(20);text("docking succesful",200,300)}
  drawSprites();
}