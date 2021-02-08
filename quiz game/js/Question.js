class Question{
    constructor() {
      this. input1 = createInput("Name");
      this. input2 = createInput("Option no");
      this. button = createButton('Submit');
      this.question = createElement('h3');
      this. title = createElement('h2')
     // this.option=createElement('h1')
    }
  hide(){
  
 // this.question.hide();
    this.input1.hide();
    this. input2.hide();
    this.title.hide();
    this.button.hide();
  
  }
    display(){
     
      this.title.html("My Quiz Game");
     this. title.position(350, 0);
      this.question.html("Question:- What starts and ends with the letter 'E', ut has only one letter? " );
      this.question.position(150,80);

      this.option1.html("1: Everyone")
      this.option1.position(150,80);

      this.option2.html("2: Enevelope")
      this.option1.position(150,100);

      this.option3.html("3: Estimate")
      this.option3.position(150,120);

      this.option4.html("4: Example")
      this.option4.position(150,140);

     this. input1.position(130, 160);
     this. input2.position(170, 160);
     

      this.button.position(250, 200);
  
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        Contestant1. name = this.input1.value();

        
        contestantCount+=1;
  
        Contestant1.index=contestantCount;
        Contestant1.update();
        Contestant1.updateCount(contestantCount);
       
      this. greeting.html("Hello " + player.name );
        this.greeting.position(130, 160);
      });
  
    }
  }