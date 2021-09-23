var movingRect, fexedRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup(){
  createCanvas(1800,800);
  fexedRect= createSprite(600,400,50,80);
  fexedRect.shapeColor="pink";
  movingRect= createSprite(400,200,80,30);
  movingRect.shapeColor="blue";
  gameObject1 = createSprite(100,50,50,50);
  gameObject1.shapeColor="pink";
  gameObject2 = createSprite(200,50,50,50);
  gameObject2.shapeColor="yellow";
  gameObject3 = createSprite(300,50,50,50);
  gameObject3.shapeColor="white";
  gameObject4 = createSprite(400,50,50,50);
  gameObject4.shapeColor="red";

}

function draw(){
 background(0,0,0);

 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;

 if(isTouching(movingRect,gameObject2)){
  movingRect.shapeColor="green";
  gameObject1.shapeColor="red";
  gameObject2.shapeColor="blue";
 }
 else{
  movingRect.shapeColor="blue";
  gameObject1.shapeColor="pink";
  gameObject2.shapeColor="yellow";
  
 }
 bounceOff(movingRect,fexedRect);
 drawSprites();

 

}

