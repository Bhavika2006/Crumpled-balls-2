
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball,box1,box2,box3
var world,engine


function setup() {
  createCanvas(800, 700);
  engine = Engine.create()
  world = engine.world
  box2 = new Box(550,540,10,200)
  box3 = new Box(750,540,10,200)
  box1 = new Box(650,530,230,230)
  

	
  ball = new Ball(100,640,70)
 
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true, friction:2} );
 
 	World.add(world, ground);

  
  Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("white");
  box1.display();
  
  ball.display();
  fill("yellow")
  rect(ground.position.x,ground.position.y,width,10)
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW) {
  
    Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-200});
  }
}




