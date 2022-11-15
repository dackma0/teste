
var trex ,trex_running;
var solo
var chaoinvisivel;
var cacto
var obs1, obs2, obs3, obs4, obs5, obs6;

function preload(){
  trex_running=loadAnimation("trex_1.png", "trex_3.png", "trex_1.png");
  obs1= loadAnimation("obstacle1.png");
  obs2= loadAnimation("obstacle2.png");
  obs3= loadAnimation("obstacle3.png");
  obs4= loadAnimation("obstacle4.png");
  obs5= loadAnimation("obstacle5.png");
  obs6= loadAnimation("obstacle6.png");


}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation('running', trex_running);
 // chao
  solo = createSprite(200, 190, 400, 20);
  ground.addimage('ground', groundimage);

  // chao q nao aparece kekeke
  chaoinvisivel=createSprite (200, 195, 400, 10);

}

function draw(){
  background("white")
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  if (keyDown("space") && trex.y>=170){
    trex.velocityY=-10;
  }
  ground.velocityX= -2
trex.velocityY=trex.velocityY+0.5;
trex.collide(chaoinvisivel);
drawSprites();

}

function cactos (){
  if (frameCount % 60=== 0){
    cacto = createSprite (600, 165, 10, 5)
    cacto.velocityX= -6;
    
    var rand = Math.round(random(1,6))
    switch(rand){
      case 1: cacto.addImage(obs1);
      break;

      case 2: cacto
    }

    cacto.scale = 0.5
    cacto.lifetime = 220
  }

}