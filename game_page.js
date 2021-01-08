player1Name = localStorage.getItem("player1NAME");
	player2Name = localStorage.getItem("player2NAME");

	player1_score = 0;
	player2_score = 0;

document.getElementById("Name1").innerHTML = player1_name + " : ";
document.getElementById("Name2").innerHTML = player2_name + " : ";

document.getElementById("Score1").innerHTML = player1_score ;
document.getElementById("Score2").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1Name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2Name ;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}


