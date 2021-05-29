//Create database objects,gamestate and playercount ,form,reading and writing gamestate and playercount
var database;
var gameState, playerCount;
var form,game,player;
var plr1,plr2, players;
var allPlrs;
var obstacles,obstaclesGroup;;
var prize;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.readGameState()
  game.start()

  obstaclesGroup = new Group();

}

function draw(){

  if( playerCount === 2){
    game.updateGameState(1);
  }
  if (gameState === 1){
    game.play();
  }

  
  if (gameState === 2){
    text("GAME OVER",300,500);

  }
  spawnObstacles();
}

function spawnObstacles(){
if(frameCount % 100 == 0){
  obstacles = createSprite(random(300,500) , random(400,500),50,50);
  obstacles.velocityx == -5;

  obstaclesGroup.add(obstacles);

}
}
