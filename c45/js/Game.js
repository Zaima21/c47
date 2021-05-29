class Game {
  
  constructor(){}


updateGameState(state){
  database.ref('gameState').set({
    gameState:state
  });
}

readGameState(){
  var gameStateRef = database.ref('gameState')
  gameStateRef.on("value",function(data){
    gameState = data.val();
  })
}

async start(){
 
  //object for class player
  player = new Player();
 
  var playerCountRef = await database.ref('playerCount').once("value"); 
  if(playerCountRef.exists()){
     playerCount = playerCountRef.val(); 
    player.readPlayerCount(); 
  }

  form = new Form()
  form.display();
  
  plr1 = createSprite(200,200);
  plr2 = createSprite(200,300);

  players = [plr1,plr2];
}

play(){

  form.hide()
  Player.getPlayerInfo();
  
  if (allPlrs != undefined){
    var index = 0;

    var x =0, y =100;

    for (var p in allPlrs){

      index += 1;

      y == y+200; 
      x == allPlrs[p].distance;

      players[index-1].x = x;
      players[index-1].y = y;
         
      if(players[index].isTouching(obstaclesGroup)){

        player.life -= 1;
      }

    }
  }

  if (keyIsDown(RIGHT_ARROW) && player.index != null){
        player.distance += 10;
        player.updatePlayerDetails();
  }
 
  if(player.life === 0){
     gameState = 2;    

  }

  if(player.distance > 3000){
     prize = createSprite(200,300,40,40);

     text("prize found", 300,300);
     gameState = 2;

  }
}

}



//to do -
//we need to scroll the background - infinite effect
//add images to each player
//display life for each player on the canvas