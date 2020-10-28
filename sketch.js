var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
box1=createSprite(200,100,80,50)
box1.shapeColor="blue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
box1.x=mouseX;
box1.y=mouseY;
bounceOff(box1,movingRect);
if(isTouching(movingRect, box1)){
  movingRect.shapeColor = "blue";
  box1.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
box1.shapeColor = "green";
}
  drawSprites();
}
