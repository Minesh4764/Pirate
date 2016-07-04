$(document).ready (function(){

  	$('.reset').click(function() {
		location.reload(true);		
	});
	var numCorrect = 0;
    	var currentQuestion = 0;

 $(".quiz-wrapper").css("display", "block");

$(".start").css("display","none");


var Bartender = function () 
{
//wrapping object variable in function. I hate Global variable.


	this.ObjQuestion = [{
		question: "1. Do ye like yer drinks strong?", 
	     answers:["Yes","No"],
	     	Taste:"strong"
	    
		},
		{
		question:"2.Do ye like it with a salty tang?",
		answers:["Yes","No"],
		  Taste: "salty"
		
		},
		{
		question:"3.Are ye a lubber who likes it bitter?",
	  	answers:["Yes","No"] ,
	  	Taste:"bitter"
		 
		},
		{
		question:"4. Would ye like a bit of sweetness with yer poison?",		
	     answers:["Yes","No"],
	      	Taste: "sweet"
		 
		},
		{ 
		question:"5. Are ye one for a fruity finish?",
	     answers:["Yes","No"],
	     	Taste: "fruit"
		 

		}]
     this.userPreferences=[];
	}

Bartender.prototype.createDrink =function (pantryobj) { 
   var Objprop ;
   this.PreparedDrink =[];
  //console.log("this is the length" + pantryobj.length);
   //get the user preferance and loop through pantry to make the drink
     

var DrinkIngredeint="";

var count =pantryobj.ingredients.length
for ( i=0;i<Objbartender.userPreferences.length;i++)
 {
 	for (j=0;j<count;j++) {
           if(this.userPreferences[i] == pantryobj.ingredients[j].category) {
  
                           this.PreparedDrink.push( pantryobj.ingredients[j].name);
           }

      }
         DrinkIngredeint += this.PreparedDrink[Math.floor(Math.random() * this.PreparedDrink.length)] + "  "; 

      console.log(this.PreparedDrink);
      console.log(DrinkIngredeint);

     // console.log("This is " + finaldrink);
    }

    Objbartender.DrinkIngredeint = DrinkIngredeint;
 


  

}





function Ingredient(name, category){
  this.name = name;
  this.category = category;
}

	var Pantry = function(ingredients) {
            this.ingredients =ingredients;
	    }
var myPantry = new Pantry(
  [
  //adding two at once.
    new Ingredient('glug of Rum', 'strong'),
    new Ingredient('slug of Whiskey', 'strong'),
    new Ingredient('splash of Gin', 'strong'),
    new Ingredient('olive on a stick', 'salty'),
    new Ingredient('salt-dusted rim', 'salty'),
    new Ingredient('rasher of bacon', 'salty'),
    new Ingredient('shake of bitters', 'bitter'),
    new Ingredient('splash of tonic', 'bitter'),
    new Ingredient('twist of lemon peel', 'bitter'),
    new Ingredient('sugar cube', 'sweet'),
    new Ingredient('spoonful of honey', 'sweet'),
    new Ingredient('splash of Cola', 'sweet'),
    new Ingredient('slick of orange', 'fruity'),
    new Ingredient('dash of cassis', 'sweet'),
    new Ingredient('cherry on top', 'sweet')
  ]
);



var Objbartender = new Bartender();

$(".start").click(CreateQuestion(Objbartender));


    //populate question and answers
//CreateQuestion(ObjQuestion,currentQuestion,numCorrect);
//}


 function CreateQuestion(Objbartender) {
 	//alert(currentQuestion);

 	if (currentQuestion <=4 )
 {   // for (var i=0;i<Objbartender.ObjQuestion.length;i++) {
	     $("#quiz h3").html(Objbartender.ObjQuestion[currentQuestion].question);
	     $("label").html(Objbartender.ObjQuestion[currentQuestion].answers[0]);
	     $("#answerTwo + label").html(Objbartender.ObjQuestion[currentQuestion].answers[1]);

	     console.log(Objbartender.userPreferences);


  }
  else {

   


  }
   //}
}
	//onclick next
	$(".next").click(function(){
		if (currentQuestion <=4) {
	         	console.log("next click currentQuestion:" + currentQuestion);

		     $(".summary").empty();
		     var radioSelect = $('input:radio[name=answer]:checked').val();
	//	var rightAnswer = ObjQuestion[currentQuestion].correct;
		//alert(radioSelect);
		     if (radioSelect === undefined ){
		     	    $('.message-no-guess').css('display', 'block');
				}
		    else{
			      $('.message-no-guess').css('display', 'none');
	        	//	alert(Objbartender.ObjQuestion[currentQuestion].Taste);
		          if (radioSelect =="Yes") {

		  	          Objbartender.userPreferences.push(Objbartender.ObjQuestion[currentQuestion].Taste); 

                  }

  
        if (currentQuestion == 4 )
          { 
                Objbartender.createDrink(myPantry)
              $(".quiz-wrapper").css("display", "none");
			  $(".results").css("display", "block");
			

                results();

          } 
			 currentQuestion++;
			CreateQuestion(Objbartender); 
	
		

			} //else ending
		
 }


	//next question
	

	function nextQuestion(ObjQuestion,currentQuestion){
		if (currentQuestion > 4){
			$(".quiz-wrapper").css("display", "none");
			$(".results").css("display", "block");
			results();

		
		}
		else {
			//clear radio
			$("input:radio").prop('checked', false);
			//next 	question
			CreateQuestion(ObjQuestion,currentQuestion)
			$(".hearts").empty();
			$(".summary").empty();
			return false;
		}
	}

	//results function,
	

	function results(){
		//console.log("results!");
		alert("Display the result");
		if (Objbartender.userPreferences.length >  0 ){ $("#amountRight").html( Objbartender.DrinkIngredeint); }
		       // else {$("#amountRight").html(numCorrect );}
    
		

	}
   
	//reset quiz
//}

});
});