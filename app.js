

function check(){


	var question1 = document.quiz.question1.value;

	var question2 = document.quiz.question2.value;

	var question3 = document.quiz.question3.value;

  
	if (question1 === "Santiago" || question1 === "SANTIAGO" ||  question1 === "santiago")  {
     
    
    document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>Es Santiago</p>"
            "</div>";
    
  } else {
    
    
     document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>La unica sede en Chile es en Santiago</p>"
            "</div>";
}

	if (question2 === "Frontend Developer,UX Designer") {

	
    
    document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>Frontend Developer, UX Designer</p>"
            "</div>";
    
    
     } else {
    
       document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p> Ambos dos Frontend Developer,UX Designer</p>"
            "</div>";
       
  
}	

	if (question3 === "Javascript") {

	
    document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>Javascript</p>"
            "</div>";
    
     } else {
    
  
       document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No es Java, ni Phyton</p>"
            "</div>";
       
	}

	
 
	document.getElementById("after_submit").style.visibility = "visible";
	

function check(){


	var question1 = document.quiz.question1.value;

	var question2 = document.quiz.question2.value;

	var question3 = document.quiz.question3.value;

  
	if (question1 === "Santiago" || question1 === "SANTIAGO" ||  question1 === "santiago")  {
     
    
    document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>Es Santiago</p>"
            "</div>";
    
  } else {
    
    
     document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>La unica sede en Chile es en Santiago</p>"
            "</div>";
}

	if (question2 === "Frontend Developer,UX Designer") {

	
    
    document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>Frontend Developer, UX Designer</p>"
            "</div>";
    
    
     } else {
    
       document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p> Ambos dos Frontend Developer,UX Designer</p>"
            "</div>";
       
  
}	

	if (question3 === "Javascript") {

	
    document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>Javascript</p>"
            "</div>";
    
     } else {
    
  
       document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No es Java, ni Phyton</p>"
            "</div>";
       
	}

	
 
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("Empezar").value


    }


    }