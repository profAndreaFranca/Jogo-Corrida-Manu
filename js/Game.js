class Game {
  constructor() {}

  //atualizando o GameState do jogo
  getState(){
    var getStateRef = database.ref("gameState");
    getStateRef.on("value", function(data){
      gameState = data.val()
    })
  }

  start() {
    
    form = new Form();
    form.display();

    player = new Player();
    player.getCount();
    
  }
}
