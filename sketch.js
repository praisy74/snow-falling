const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var snowparticles=[]

function preload(){

  back=loadImage("praisysnow.jpg")
  this.imag = loadImage("blue.png");
  this.imag1 = loadImage("yellow.png");
  this.imag2 = loadImage("sky.png");
  this.imag3 = loadImage("pink.png");



}
function setup() {
  createCanvas(1000,600);
  createSprite(400, 200, 50, 50);

  
   // snowparticles.addImage("a",image)
  
  
}

function draw() {

  background(back);  
  if(frameCount%5===0){
    snowparticles.push(new Snow(random(10,990),200));
  }
  for (var v = 0; v < snowparticles.length; v++) {
    snowparticles[v].display();
  }
  drawSprites();
}