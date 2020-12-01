const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, tree_img;
var ground;
var boy, boy_img;

var engine, world;

var sling1;

function preload()
{
	tree_img = loadImage("MatterJSBoilerPlate-master/sprites/tree.png");
	boy_img = loadImage("MatterJSBoilerPlate-master/sprites/boy.png")
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = createSprite(1000, 360, 30, 500);
	tree.addImage(tree_img);
	tree.scale = 0.5;

	ground = createSprite(650, 680, 1300, 30);
	ground.shapeColor = "green";

	boy = createSprite(200, 550, 30, 500);
	boy.addImage(boy_img);
	boy.scale = 0.2;

	//Stone
	stone = new Stone(660, 570, 40, 40);

	//Slingshot
	sling1 = new slingShot(stone.body, {x: 660, y: 570});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(200);

  stone.display();
  sling1.display();
  
  drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    sling1.fly();
}