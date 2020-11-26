const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var ball;
var rope;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    b1=new Box(900,10,70,70);
    b2=new Box(900,10,70,70);
    b3=new Box(900,10,70,70);
    b4=new Box(900,10,70,70);
    b5=new Box(900,10,70,70);
    b6=new Box(900,10,70,70);
    b7=new Box(800,10,70,70);
    b8=new Box(800,10,70,70);
    b9=new Box(800,10,70,70);
    b10=new Box(800,10,70,70);
    b11=new Box(800,10,70,70);
    b12=new Box(800,10,70,70);
    b13=new Box(700,10,70,70);
    b14=new Box(700,10,70,70);
    b15=new Box(700,10,70,70);
    b16=new Box(700,10,70,70);
    b17=new Box(700,10,70,70);
    b18=new Box(700,10,70,70);
    b19=new Box(700,10,70,70);
    b20=new Box(700,10,70,70);
    ground = new Ground(600,height,1200,20);
    ball=new Ball(200,200,80,80);
    rope= new Rope(ball.body, {x: 500, y:50});
   

    
}

function draw(){
    background("lightgreen");
    Engine.update(engine);
     ground.display(); 
     b1.display() ;
     b2.display() ;
     b3.display() ;
     b4.display() ;
     b5.display() ;
     b6.display() ;
     b7.display() ;
     b8.display() ;
     b9.display() ;
     b10.display() ;
     b11.display() ;
     b12.display() ;
     b13.display() ;
     b14.display() ;
     b15.display() ;
     b16.display() ;
     b17.display() ;
     b18.display() ;
     b19.display() ;
     b20.display() ;
     ball.display();
     rope.display();
}

function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


/*function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed<1){
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body,{x:200,y:50})
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}*/