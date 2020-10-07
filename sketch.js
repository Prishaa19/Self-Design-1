//all global variables
var gameState = "PLAY";
var score = 0;
var playerLife = 3;
var player1 , player1Image;
var trafficSignal ;
var warning;

function preload(){
//load all images and sound files here
player1Image = loadImage ("Images/player.png");
player1Left = loadImage("Images/");
player1Right = loadImage("Images/");

warning = loadSound("Sounds/Warning.mp3");

}

function setup() {
  createCanvas(800,400);
  player1 =  createSprite(400, 200, 50, 50);
  player1.addImage(playerImage);

  car1 = new Car (200,200,50,50);
  car1.velocityX = 5;
  
 
  
}

function draw() {
  background(255,255,255);
  var rand = randomNumber(1,2);

  //if gameState is PLAY
  if(gameState==="PLAY"){

  //on pressing the left arrow player1 will go left and animation will face left side
  if(keyDown(LEFT_ARROW)){
  //if player1 is crossing during red light display warning and stop the player
  if(trafficSignal==="red"){
    resetPosition();
  }
  player1.x-=5;
  player1.addImage("leftImage",player1Left)
  }

  //on pressing the right arrow player1 will go left and animation will face right side
  if(keyDown( RIGHT_ARROW)){
    if(trafficSignal==="red"){
      warning.play();
      resetPosition();
    }
    player1.x+=5;
    player1.addImage("rightImage",player1Right)
   }
  

  //if player1 is touching the moving obstacles with velocity, player1 will fall down reduce playerLife; display message; obstacle velocity = 0
   if(player1.isTouching(car1)){
     player1.addImage("playerFall");
     playerLife -= 1;
     text("You lose 1 life",100,100);
     car1.velocityX = 0;
   }

   if(rand===1){
    trafficSignal = "red";
  }
  else{
    trafficSignal = "green";
  }

  //if player1 loses 3 lives gameState = GameOver
  if(playerLife === 0){
    gameState = "GameOver";
    text("You have used all your lives",190,290);
  }

  }

  //if Space is pressed gameState = PLAY
  if(keyDown("SPACE") && gameState!== "PLAY"){
    gameState = "PLAY";
  }

  //if player1 crosses the road successfully gameState = Won

  
   
  //if player1 is crossing the road successfully ask him to go to level 2
   if(gameState==="Won"){
     text("Press 2 to go to Level-2",300,100);
   }

   if(keyDown("2")&& gameState === "Won"){
     gameState = "Level2";
     level2();
   }


  car1.display();

  drawSprites();
}

//resetPosition function
function resetPosition(){
  player1.x=400;
  player1.y=200;
  player1.velocityX=0;
  player1.addImage("player1Image",player1Image);
}

function level2(){
//add the train to the same background
//at the crossing display alert message if train is approaching
//calculate life time of train after it passes
//after frameCount>Lifetime player1 can move forward by making the poll disappear
//increase the velocity of the cars
//add more obstacles
//change the player animation
}