class QUiz {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        Contestant1= new contestant();
        var contestantCountRef=await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount=contestantCountRef.val();
          Contestant1.getCount();
  
        }
       
        question = new Question()
        question.display();
      }
    }
    play(){
      question.hide();
      textSize(30);
      text("game start",120,100);
      contestant.getcontestantInfo();
      if(allcontestant!=undefined){
      //  var display_position=130;
        for(var plr in allcontestant){
          if(plr==="Contestant"+Contestant.index)
          fill("red");
          else{
            fill("black");
  
          }
  
          display_position=display_position+20;
          textSize(15);
          text(allcontestant[plr].name+":"+allcontestant[plr].distance,120,display_position);
  
        }
      }
     
    }
  }
  