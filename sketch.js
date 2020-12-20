const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var bar;


function setup(){
    createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;


    bar = new Bar(400,100,200,10);
    
    bob1 = new Bob(300,400);
    bob2 = new Bob(340,400);
    bob3 = new Bob(380,400);
    bob4 = new Bob(420,400);
    bob5 = new Bob(460,400);
    bob6 = new Bob(500,400);
    
    string1 = new SlingShot(bob1.body,{x:330,y:100})
    string2 = new SlingShot(bob2.body,{x:350,y:100})
    string3 = new SlingShot(bob3.body,{x:380,y:100})
    string4 = new SlingShot(bob4.body,{x:420,y:100})
    string5 = new SlingShot(bob5.body,{x:450,y:100})
    string6 = new SlingShot(bob6.body,{x:470,y:100})


    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 800,
            showAngleIndicator: true
        }
    });

    Render.run(render);
}

function draw(){
    background("black");
    
    Engine.update(engine);
    //strokeWeight(4);
    bar.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    bob6.display();

    string1.display();
    string2.display();
    string3.display();
    string4.display();
    string5.display();
    string6.display();
    
}
