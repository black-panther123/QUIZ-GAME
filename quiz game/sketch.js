var canvas;
var  gameState, contestantCount, database, quiz, question  ; 
var gameState = 0;







function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz= new QUiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
