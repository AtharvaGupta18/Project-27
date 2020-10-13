
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(240, 180);
	bob2 = new Bob(265, 180);
	bob3 = new Bob(290, 180);
	bob4 = new Bob(315, 180);
	bob5 = new Bob(340, 180);

	roof1 = new Roof(240, 120, 25, 10);
	roof2 = new Roof(265, 120, 25, 10);
	roof3 = new Roof(290, 120, 25, 10);
	roof4 = new Roof(315, 120, 25, 10);
	roof5 = new Roof(340, 120, 25, 10);

	g = new Roof(300, 390, 600, 10);
	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
	background(199);
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof1.display();
	roof2.display();
	roof3.display();
	roof4.display();
	roof5.display();

	g.display();

  	drawSprites();
 
}



