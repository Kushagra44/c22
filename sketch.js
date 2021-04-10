const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var ball_options ={
        restitution:1
    }

   ball= Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);
    var ball2_options ={
        restitution:.8
    }

   ball2= Bodies.circle(150,80,20,ball2_options);
    World.add(world,ball2);

   


    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown")
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    fill("red")
    ellipse(ball.position.x,ball.position.y,20,20);

ellipseMode(RADIUS);
    fill("blue")
    ellipse(ball2.position.x,ball2.position.y,20,20);
}
