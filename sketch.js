var database
var gamestate=0
var playercount=0
var allPlayers;
// global varibles
var player, game, form

// variables
var car1img, car2img, car3img, car4img
var trackimg, groundimg
var car1, car2, car3, car4
var cars 

function preload(){
car1img = loadImage("images/car1.png");
car12img = loadImage("images/car2.png");
car3img = loadImage("images/car3.png");
car4img = loadImage("images/car4.png");

trackimg = loadImage("images/track.jpg");
groundimg = loadImage("images/ground.png");
}


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
  
  game= new Game()
  game.getstate()
  game.start()  
  
}


function draw(){
  background("white");
  if(playercount==4){
  game.updateState(1)
  }
  if(gamestate===1){
    clear()
    game.play()
  
  }
}
