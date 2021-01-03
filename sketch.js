var boyImage,mango1,mango2,mango3,mango4,slingshot;
var stoneObj, treeObj, boi,groundd;
var gameState="ONSLING";

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImage=loadImage("sprites\Plucking mangoes/stone.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boi=createSprite(30,40,25,25);
	boi.addImage=(boyImage);

	mango1= new Mango(40,57,50);
	mango2= new Mango(40,77,50);
	mango3= new Mango(40,97,50);
	mango4 = new Mango(40,27,50);
	
	treeObj=new Tree(40,60,500);

	stoneObj=new Stone(30,40,20);

	groundd= new Ground(400,600,800,10);

	slingshot = new SlingShot(stoneObj.body,{x:200, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


  groundd.display();
  treeObj.display();
  stoneObj.display();
  boi.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  slingshot.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  drawSprites();
 
}

function mouseDragged(){
    if(gameState!== "LAUNCHED"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState="LAUNCHED";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(stoneObj.body);
    }
}

function detectcollision(lstone,lmango){
	 mangoBodyPosition=lmango.body.position;
	 stoneBodyPosition=lstone.body.position;
	 var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	    if(distance<=lmango.r + lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		}
}