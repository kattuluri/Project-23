var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var drop1, drop2, drop3;
var game = 1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1200, 800);
	rectMode(CENTER);
	
	drop1 = createSprite(615,760,80,10);
	drop1.shapeColor = "red";
	drop1.visible = false;
	
	drop2 = createSprite(580,740,10,50)
	drop2.shapeColor = "red"
	drop2.visible = false;

	drop3 = createSprite(660,740,10,50)
	drop3.shapeColor = "red"
	drop3.visible = false;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	packageSprite=createSprite(width/2,80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	groundSprite=createSprite(600,780,800,20);
	groundSprite.shapeColor="tan";
	groundSprite.depth = packageSprite.depth;
    packageSprite.depth = packageSprite.depth+1;


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  textSize(21);
  text("Use Down Arrow to Drop the Package",210,100);
  
 
  if(packageSprite.isTouching(drop2)){
	Body.setStatic(packageBody, true);
	game = 0;
  }
  drawSprites();
}



function keyPressed() { 
  if (keyCode === DOWN_ARROW && game == 1) {
	Matter.Body.setStatic(packageBody,false); 
	drop1.visible = true;
	drop2.visible = true;
	drop3.visible = true;
  }
} 
