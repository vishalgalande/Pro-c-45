var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, jet1, jet2;
var jets = [];

//BP
function preload() {
  backgroundImage = loadImage("assets/background.jpg");
  blackJet = loadImage("assets/black-jet.png");
  whiteJet = loadImage("assets/white-jet.png");
  //track = loadImage("../assets/track.jpg");
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
