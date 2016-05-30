$(document).ready (function(){

	$('.reset').click(function() {
		location.reload(true);		
	});
	var numCorrect = 0;
$(".start").click(Startquestion);

function Startquestion () 
{
//wrapping object variable in function. I hate Global variable.
$(".quiz-wrapper").css("display", "block");

$(".start").css("display","none");

	var ObjQuestion = [{
		question: "1. What does HTML stand for?", 
		answers:["Hyper Text MarkUp Language", "Hotmail", "How to make Lasagna", "Hyper Text Language"],
		qNum: 0,
		correct: 0
		},
		{
		question:"2.How Many tags are in a regular element?",
		answers:["1", "2", "3", "4"],
		qNum: 1,
		correct:1
		},
		{
		question:"3.What is the correct syntax for referring to an external script called xxx.js?",
		answers:["script href=xxx.js", "script src=xxx.js", "script name=xxx.js", "script path=xxx.js"] ,
		qNum: 2,
		correct:1
		},
		{
		question:"4. How do you create a function in JavaScript?",		
		answers:["function:myFunction()", " function = myFunction()", " function myFunction()", " Function()"],
		qNum: 3,
		correct: 2
		},
		{ 
		question:"5. How to write an IF statement for executing some code if i is NOT equal to 5?",
		answers:["if(i!=5)", "if(i=!5)", "if(i=5)", "if (inot5"],
		qNum: 4,
		correct: 1
		


		}]
//declare global vars
console.log(ObjQuestion);


	var currentQuestion = 0;
    //populate question and answers
CreateQuestion(ObjQuestion,currentQuestion,numCorrect);
}


 function CreateQuestion(ObjQuestion,currentQuestion) {

	$("#quiz h3").html(ObjQuestion[currentQuestion].question);
	$("label").html(ObjQuestion[currentQuestion].answers[0]);
	$("#answerTwo + label").html(ObjQuestion[currentQuestion].answers[1]);
	$("#answerThree + label").html(ObjQuestion[currentQuestion].answers[2]);
	$("#answerFour + label").html(ObjQuestion[currentQuestion].answers[3]);
//events


	//onclick next
	$(".next").click(function(){
		$(".summary").empty();
		var radioSelect = $('input:radio[name=answer]:checked').val();
		var rightAnswer = ObjQuestion[currentQuestion].correct;
		
		if (radioSelect === undefined ){
			$('.message-no-guess').css('display', 'block');
				}
		else{
			$('.message-no-guess').css('display', 'none');
			
			currentQuestion ++; 
			if (radioSelect == rightAnswer ) {
				numCorrect ++;
				console.log("correct! " + numCorrect);
				$(".summary").append("Right answer!");
				}
			// 
			else {
				var CorrectAnswer= ObjQuestion[currentQuestion-1].answers[rightAnswer];
		
				
                   	//	console.log("The correct answer is " + CorrectAnswer);

				$(".summary").append('Wrong answer The Correct answer was : '+ CorrectAnswer);
				} 

				//populate next question function
			 	
			 //	
			};
			setTimeout(function(){
			 		nextQuestion(ObjQuestion,currentQuestion)}, 1000);
		//	CreateQuestion(ObjQuestion,currentQuestion);
	});
	//enter key
	$(document).keydown(function( event ){
		if (event.which == 13){
			event.preventDefault();
			console.log('enter key pressed');
			//call click function
			$('.next').click();
			};
	});
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
		if (numCorrect == 1 ){ $("#amountRight").html(numCorrect + " blackheart "); }
		        else {$("#amountRight").html(numCorrect );}

		
	}
   
	//reset quiz
}

});
