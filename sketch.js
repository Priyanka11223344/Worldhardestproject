var car;
var wall;
var speed;
var weight;
var deformation;

function preload() {
  
}

function setup() {
  createCanvas(400,500);
  
  car = createSprite(30,150,20,20);
  
  wall = createSprite(350,150,20,50);
  wall.shapeColor = "black";
  
  speed = random(55,90);
  weight = random(100,400);
}
  
  function draw() {
  background("white");
  
  car.velocityX = speed;
  
  car.collide(wall);
  
  defomation = 0.5 * weight * speed * speed/22500;
  drawSprites();
}
