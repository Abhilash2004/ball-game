var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,paper,box,ground;
const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
paper =new Paper (100,10,170,170);
box1=new Box(600,680,200,10);
box2=new Box(500,650,10,70)
box3=new Box(700,650,10,70)
ground=new Ground(100,700,7000,10)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
 
box1.display()
box2.display()
box3.display()
ground.display();

  drawSprites();
 
}
function keyPressed (){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});


}


}


