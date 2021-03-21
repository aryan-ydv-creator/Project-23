var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var s1,s2,s3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 s1 = new Side(width/2,ground.position.y,200,20)
	 s2= new Side(width/2-100,ground.position.y-40,20,100)
	 s3 = new Side(width/2+100,ground.position.y-40,20,100)

	//  Matter.Body.setStatic(s3,true);
	//  Matter.Body.setStatic(s2,true);
	//  Matter.Body.setStatic(s3,true);
	

	
	packageSprite=createSprite(width/2, 80, 0,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	
	
	
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	



	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	drawSprites();
	keyPressed();
	s1.display();
	s2.display();
	s3.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	rect(packageBody.position.x,packageBody.position.y,200,5)
	rect(packageSprite.position.x,packageSprite.position.y,200,5)
	Matter.Body.setStatic(packageBody,false)
    
  }
}



