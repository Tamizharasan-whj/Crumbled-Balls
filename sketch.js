
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var DustbinWall,DustbinWall1;
var Ball;
var ground,ground1;

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	
	ground = new Ground(width/2,475,width,20);
	
    DustbinWall = new Ground(600,400,15,150);
    DustbinWall1 = new Ground(800,400,15,150);




	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
   DustbinWall.display();
  DustbinWall1.display();


}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
	  Matter.Body.applyForce(Ball,{x:0,y:0},{x:0.005,y:0})
  }
}

/*function keyPressed1(){
	if(keyCode===TOP_ARROW){
		Matter.Body.applyForce(Ball,{x:0,y:0},{x:0,y:-0.5})
	}
  }*/


