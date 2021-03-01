
var fixrect,r1,r2,r3,r4,r5, movrect
function setup() {
  createCanvas(800,400);
  movrect=createSprite(400, 200, 50, 50);
  fixrect=createSprite(200,200,50,50);
r1=createSprite(200,300,30,25)
r1.velocityX=3
r1.shapeColor='blue'
r2=createSprite(400,300,20,40)
r3=createSprite(300,300,45,35)
r3.velocityY=-3
r4=createSprite(450,320,45,45)
r4.velocityX=-3
r5=createSprite(300,100,40,40)
r5.velocityY=3
}

function draw() {
  background(200,25,59);  
  console.log(movrect.x-fixrect.x)
  movrect.x=mouseX;
  movrect.y=mouseY;
 isTouching(movrect,r2);
 isTouching(movrect,r1);
 isTouching(movrect,r3);
  isTouching(movrect,fixrect);
 isTouching(movrect,r4);
 bounceOff(r1,r4);
 bounceOff(r3,r5);
  drawSprites();
}
