var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles;
var turn=0;


var gameState= "start" ;

var plinkos = [];
var division= [];
var divisionsHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  yline= new Ground(width/2,500,width,10,{isStatic:false});

   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions(k, height-divisionsHeight/2, 10, divisionsHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

   

    

 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  textSize(25)
  text("500",20,525);

  textSize(25)
  text("500",100,525);

  textSize(25)
  text("500",180,525);

  textSize(25)
  text("500",260,525);

  textSize(25)
  text("100",340,525);

  textSize(25)
  text("100",420,525);

  textSize(25)
  text("100",500,525);

  textSize(25)
  text("200",580,525);

  textSize(25)
  text("200",670,525);

  textSize(25)
  text("200",740,525);
  
  

  yline.display();
  

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(particles!==null){

    particles.display();
   
   if(particles.body.position.x<300){
    score= score+500;
particles=null;
if (turn>=5)gameState="end";

     
   }
  }
   if(particles.body.position.x>301 && particles.body.position.x<600){
    score= score+100;
     
   }
   if(particles.body.position.x>601 && particles.body.position.x<900){
    score= score+200;
     
   }
  
  for (var j = 0; j < particles; j++) {
   
    
   }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }
}
function mousePressed(){
  if (gameState!=="end"){
    particles=new Particle(random(width/2-30, width/2+30), 10,10);
    score++;
  }
}
}