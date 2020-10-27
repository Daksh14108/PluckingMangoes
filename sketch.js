const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stone,tree,boy;
var gardenImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var rubberBand;

function preload()
{
	boy = loadImage("boy.png");
	gardenImg = loadImage("garden.jpg");
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(650,640,1400,30);
	stone = new Stone(100,100,41);
//	tree = new Tree(1150,330,350,600);
	  tree=new Tree(1050,330);
	mango1 = new Mango(1010,330,40);
	mango2 = new Mango(1100,330,40);
	mango3 = new Mango(965,240,40);
	mango4 = new Mango(1050,150,40);
	mango5 = new Mango(1020,174,40);
	mango6 = new Mango(1130,250,40);
	mango7 = new Mango(1053,210,40);
	mango8 = new Mango(1100,240,40);

  	rubberBand = new RubberBand(stone.body,{x:230,y:400})





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(gardenImg);

  image(boy,200,340,200,300);
  ground.display();
  tree.display();

  stone.display();
 

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

rubberBand.display();

  detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
  fill("blue");
  textSize(40);
  text("Press Space To Play Again",200,200);
  drawSprites();

  
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    rubberBand.fly();   
}
function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false)
}
}
function keyPressed(){
	if(keyCode===32){
		rubberBand.attach(stone.body);
	}
}