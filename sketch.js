var movingRect, fixedRect,result;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "white";
  fixedRect.debug = true;

  movingRect = createSprite(200, 200, 100, 50);
  movingRect.shapeColor = "white";
  movingRect.debug = true;

}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
      
 result= isTouching(movingRect,fixedRect);
console.log(result);
 
  
  drawSprites();
}

