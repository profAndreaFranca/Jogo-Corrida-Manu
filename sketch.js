var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,game;
var playerCount = 0;
var gameState = 0;
var car1,car2, car1_img,car2_img
var cars = []
var track
var allPlayers

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");

  //sprites
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  //pista
  track = loadImage("./assets/PISTA.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);

  if (playerCount == 2 ){
    game.updateState(1)
  }
  if (gameState == 1){
    game.play()
  }

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
