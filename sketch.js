const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15;

function preload() {
    background = rgb(0, 0, 0);
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



    t1 = new TowerSiege(700,310,20,20);
    t2 = new TowerSiege(710,320,20,20);
    t3 = new TowerSiege(710,320,20,20);
    t4 = new TowerSiege(730,330,20,20);
    t5 = new TowerSiege(730,330,20,20);
    t6 = new TowerSiege(730,330,20,20);
    t7 = new TowerSiege(740,340,20,20);
    t8 = new TowerSiege(740,340,20,20);
    t9 = new TowerSiege(740,340,20,20);
    t10 = new TowerSiege(740,340,20,20);
    t11 = new TowerSiege(750,350,20,20);
    t12 = new TowerSiege(750,350,20,20);
    t13 = new TowerSiege(750,350,20,20);
    t14 = new TowerSiege(750,350,20,20);
    t15 = new TowerSiege(750,350,20,20);


    //log6 = new Log(230,180,80, PI/2);
    hittingTower= new hittingTower(bird.body,{x:200, y:30});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    t1.display();
    t2.display();
    t3.display();
    t4.display();
    t5.display();
    t6.display();
    t7.display();
    t8.display();
    t9.display();
    t10.display();
    t11.display();
    t12.display();
    t13.display();
    t14.display();
    t14.display();
    

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    hittingTower.fly();
}

function keyPressed(){
    if (keyCode === 100){
    slingShot.attach(bird.body);
    }
}
