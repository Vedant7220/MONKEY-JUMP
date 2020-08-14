var monkey,monkey_running;
var foodGroup,bananaImage;
var stoneGroup,stoneImage;
var jungle,jungleImage;
var score=0;
var ground

function preload(){
  jungleImage=loadImage("jungle.png");
   monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png");
  stoneImage=loadImage("stone.png");
}


function setup() {
  createCanvas(800, 400);
   jungle=createSprite(0,0,800,400);
  jungle.addImage(jungleImage);
  jungle.scale=1.5;
  jungle.x=jungle.width/2;
  jungle.velocityX=-4;
  
 monkey = createSprite(100,340,20,50);
  monkey.addAnimation("Running",monkey_running);
  monkey.scale = 0.1; 
  
   ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  foodGroup = new Group();
  stoneGroup = new Group();
  score=0; 
  
  
}

function draw() {
  background(255);
     
  if(jungle.x<0) {
    jungle.x=jungle.width/2;
  }
  if(jungle.x<100){
    jungle.x=jungle.width/2;
  }
  if(foodGroup.isTouching(monkey)){
      foodGroup.destroyEach();
    score = score + 2;
    }
   switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
   if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
     
 // monkey.collide(jungle)    
 //    monkey.velocityY = monkey.velocityY + 0.8;
  
  
    if(stoneGroup.isTouching(monkey)){ 
        monkey  .scale=0.08;
      score=score-2;
    }
  
    stroke("black      ");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
     
  
  
  spawnFood();
  spawnstone();
   drawSprites();
}

function spawnFood() {
  //write code here to spawn the food
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add each banana to the group
    foodGroup.add(banana);
  }
}
function spawnstone() {
  if(frameCount % 300 === 0) {
    var stone = createSprite(800,350,10,40);
    stone.velocityX = -6;
    stone.addImage(stoneImage);
    
    //assign scale and lifetime to the obstacle     
    stone.scale = 0.2;
    stone.lifetime = 300;
    
    //add each obstacle to the group
    stoneGroup.add(stone);
  }
}
