class Player {

constructor(){
this.name = null;
this.index = null;
this.distance = 0;
this.life = 3;
}

updatePlayerCount(player){
    database.ref('playerCount').set({
      playerCount:player
    });
}


  readPlayerCount(){
  var playerRef = database.ref('playerCount')
  playerRef.on("value",function(data){
    playerCount = data.val();
  });
}

updatePlayerDetails(){
  var plrIndex = "players"+ this.index
  database.ref(plrIndex).set({
    name: this.name,
    distance: this.distance,
    life: this.life
  });
}

static getPlayerInfo(){
  var plrInfo = database.ref('players')
  plrInfo.on("value",function(data){
    allPlrs = data.val();
  })
}
}

