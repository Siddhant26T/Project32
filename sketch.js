const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box12,box13,box11,box12,box13,box14,box15,box16;
var polygon,polygonIMG;
var slingShot;

function preload() 
{
   polygonIMG = loadImage('polygon.png');
}
function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
    //polygon body
    polygon = Bodies.circle(800,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:800,y:200});

    ground = new Ground(600,height,1200,40);
    // fourth level
    box10 = new Box(330,275,30,40);
    box11 = new Box(360,275,30,40);
    box12 = new Box(390,275,30,40);
    box13 = new Box(420,275,30,40);
    box14 = new Box(450,275,30,40);
    box15 = new Box(300,275,30,40);
    box16 = new Box(480,275,30,40);
    // third level
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    // second level
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);
    // top level
    box9 = new Box(390,155,30,40);

    Engine.run(engine);
   
}
function draw()
{
    rectMode (CENTER);
    background("white");
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    //polygon.display();
    slingShot.display();

    imageMode(CENTER);
    image(polygonIMG,polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}