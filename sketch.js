const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hans;

function preload(){
  backgroundImg=loadImage("background.jpg")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world = engine.world;
  hans= new Hans(500, 500, 40, 10);
  

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  hans.display();

}





