
  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var score
  var ground 
  var PLAY = 1;
  var END = 0;
  var gameState = 1;
var score = 0;

  function preload(){


    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstaceImage = loadImage("obstacle.png");

  }



  function setup() {
createCanvas(600, 600);
   monkey = createSprite(100, 300, 0, 0);
    monkey.addAnimation("monkey", monkey_running);
    monkey.scale = 0.1;
    
    ground = createSprite(200, 300, 1000, 20);
    ground.velocityX = 20;
    
    
    
  }


  function draw() {
  background(255);
    
      text("Score: "+ score, 500,50);
    FoodGroup = new Group();
    obstacleGroup = new Group();

    
    if (gameState === PLAY)
    {
     if (ground.x > 400)
     {
      ground.x = 200; 
     }
       if (keyDown("space") && monkey.y >= 200)
       {
        monkey.velocityY = -10; 
       }
       monkey.velocityY = monkey.velocityY + 0.8;
    score = score + Math.round(getFrameRate()/60);
    }
    
    if (monkey.isTouching(obstacleGroup))
    {
     gameState = END; 
    }
    
    if (gameState === END)
    {
     text("GAME OVER", 200, 200);
      obstacleGroup.setLifetimeEach(0);
      FoodGroup.setLifetimeEach(0);
      
      
    }
    monkey.collide(ground);
    
    
     drawSprites();
  }
function spawnObstacles()
{
  if (frameCount % 80 === 0)
  {
  var obstacles = createSprite(200, 200, 0, 0);
    obstacles.addImage("obstacle", obstaceImage);
    obstacles.velocityX = (5 + score/100);
    obstacles.lifetime = 1000;
    obstacleGroup.add(obstacles)
  }
    
  
}

function spawnBanana()
{
  if (frameCount % 80 === 0)
  {
    var bananas = creareSprite(200, 200, 0, 0);
    bananas.addImage("banana", bananaImage);
    bananas.lifetime = 1000;
    FoodGroup.add(bananas);
  }
}





