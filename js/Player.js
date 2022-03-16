class Player {
  constructor() {
    this.name = null
    this.index = null
    this.positionX = 0
    this.positionY = 100
  }

  //atualizando o playerCount do jogo
  getCount(){
    var getCountRef = database.ref("playerCount");
    getCountRef.on("value", function (data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref("/").update({
      playerCount: count
    })
  }

  addPlayer(){
    var playerIndex = "players/player"+this.index

    if (this.index === 1) {
      this.positionX = width / 2 -100;
    } else {
      this.positionX = width / 2 +100;
    }
    
    database.ref(playerIndex).set({
      name:this.name,
      positionX: this.positionX,
      positionY:this.positionY
    })
  }

  static getPlayersInfo(){
    var playerInfoRef = database.ref("players")
    playerInfoRef.on("value",data =>{
      allPlayers = data.val();
    })
  }

  update(){
    var playerIndex = "players/player"+this.index
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY:this.positionY
    })
  }
}
