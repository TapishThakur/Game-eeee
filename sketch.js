const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backgroundIMG, bg;
var archerIMG, archer;
var ground, ground1, leftwall, rightwall;
var witchIMG, witch;
var diamond, diamondIMG;

var engine, world; 

function preload()
{
    backgroundIMG = loadImage("images/bg(castle).png");
    //archerIMG = loadImage("archer.png");
    witchIMG = loadImage("images/witch.png");
}

function setup()
{
    createCanvas(1200, 800);

    engine = Engine.create();
    world = engine.world;

    //bg = createSprite(600, 400, 10, 10);
    //bg.addImage(backgroundIMG);
    //bg.scale = 5;

    archer1 = new Player(200, 700, 0.05, 0.05);
    //archer = createSprite(200, 700, 10,10);
    //archer.scale = 0.4;

    //ground = createSprite(600, 700, 1200, 10);
    //ground.visible = false;

    ground1 = new Ground(600, 700, 1200, 50)
    leftwall = new Ground(0, 400, 10, 800);
    rightwall = new Ground(1200, 400, 10, 800);

    //diamond = new Player(600, 200, 10, 10);

    witch1 = new Witch(1100, 700, 10, 20);
    witch = createSprite(1100, 700, 10, 10);
    witch.addImage(witchIMG);
    witch.scale = 1;

    box1 = new Box(200, 200, 50, 50);
    box2 = new Box(250, 200, 50, 50);
    box3 = new Box(200, 200, 50, 50);
    box4 = new Box(250, 200, 50, 50);
    
    box5 = new Box(1100, 200, 50, 50);
    box6 = new Box(1150, 200, 50, 50);
    box7 = new Box(1100, 200, 50, 50);
    box8 = new Box(1150, 200, 50, 50);
}

function draw()
{
    background(backgroundIMG)
     
    archer1.display();
    witch1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    

    ground1.display();
    leftwall.display();
    rightwall.display();
    
    //archer.collide(ground);

    //console.log(archer.y);

    //drawSprites();
}

//function mouseDragged()
//{
   // Matter.Body.setPosition(archer1.body, {x: mouseX, y: mouseY});
//}

//function mouseReleased()
//{
   // Matter.Body.setPosition(archer1.body, {x: 200, y: 200});
    //Matter.Body.setVelocity(archer1.body, {x:3, y:-3});
//}

function keyPressed()
{
    if(keyDown("LEFT_ARROW"))
    {
        Matter.Body.setVelocity(witch1.body, {x: 3, y:(-3)});
    }

    //if(keyDown("RIGHT"))
    //Matter.Body.setVelocity(witch1.body, )

    //if(keyDown("SPACE") && (archer.y > 600))
    //archer.velocityY -= 3;
}
   