class Quiz {
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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here

    background("yellow")

    //write code to show a heading for showing the result of Quiz

    textSize(20)
    text("Resuts of the quiz",100,50)

    //call getContestantInfo( ) here

    Contestant.getContestantInfo()

    //write condition to check if contestantInfor is not undefined

    if(allContestants!==undefined){
      var displayans=230;
      fill("Blue")
      //write code to add a note here
      textSize(20)
      text("NOTE: Contestant who answered correct are highlighted in green colour!",150,220)
      text("***********************************************************************************",150,240)
  }
    
      
    
    //write code to highlight contest who answered correctly

    for(var plr in allContestants){
      var correctAns="2"
      if(correctAns===allContestants[plr].answer)
        fill("green")
        //text(contestant.name+allContestants[plr].answer,250,displayans+50)
      else
        fill("red")
        displayans+=30
        textSize(20)
        text(allContestants[plr].name+":"+allContestants[plr].answer,250,displayans)

    }

    
  }

}
