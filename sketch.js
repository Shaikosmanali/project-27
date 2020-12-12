
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var ground;
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(400,50,700,40);
	
	bob1=new Bob(100,400,80,80)
	bob2=new Bob(250,400,80,80)
	bob3=new Bob(400,400,80,80)
	bob4=new Bob(550,400,80,80)
	bob5=new Bob(700,400,80,80)

	rope1=new Rope(bob1.body,{x:100,y:50});
	rope2=new Rope(bob2.body,{x:250,y:50});
	rope3=new Rope(bob3.body,{x:400,y:50});
	rope4=new Rope(bob4.body,{x:550,y:50});
	rope5=new Rope(bob5.body,{x:700,y:50});

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  ground.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
	Matter.Body.setPosition(bob2.body,{x:mouseX,y:mouseY})
	Matter.Body.setPosition(bob3.body,{x:mouseX,y:mouseY})
	Matter.Body.setPosition(bob4.body,{x:mouseX,y:mouseY})
	Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY})

}


