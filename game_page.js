player1Name = localStorage.getItem("Player1NAME");
	player2Name = localStorage.getItem("Player2NAME");

	player1_score = 0;
	player2_score = 0;

document.getElementById("Name1").innerHTML = player1Name + " : ";
document.getElementById("Name2").innerHTML = player2Name + " : ";

document.getElementById("Score1").innerHTML = player1_score ;
document.getElementById("Score2").innerHTML = player2_score ;

document.getElementById("playerQ").innerHTML = "Question Turn - " + player1Name ;
document.getElementById("playerA").innerHTML = "Answer Turn - " + player2Name ;

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
question_turn = "player1";
answer_turn = "player2";

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("Score1").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("Score2").innerHTML = player2_score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("playerQ").innerHTML = "Question Turn - " + player2Name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("playerQ").innerHTML = "Question Turn - " + player1Name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("playerA").innerHTML = "Answer Turn - " + player2Name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("playerA").innerHTML = "Answer Turn - " + player1Name ;
	}

    document.getElementById("output").innerHTML = "";
}



