
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var spaceship1,spaceship2;

var score=0;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

engine = Engine.create();
world = engine.world;
Engine.run(engine);
  
ground = new Ground(600,680,1200,10);

spaceship1 = new spaceship(700,320,70,70);
spaceship2 = new spaceship(920,320,70,70);
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  noStroke();
  textSize(35)
  fill("white")
  text("Score" + score, width-300, 50)

  spaceship1.display();
  spaceship2.display();

  drawSprites();
 
}



