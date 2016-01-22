function sumbitted(){
	var dateText = document.getElementById("date").value; 
	if(dateText.length!= 10 || isNaN(dateText.charAt(0)) || isNaN(dateText.charAt(1)) || dateText.charAt(2)!="/" || isNaN(dateText.charAt(3)) || isNaN(dateText.charAt(4)) || dateText.charAt(5)!="/" || isNaN(dateText.charAt(6)) || isNaN(dateText.charAt(7)) || isNaN(dateText.charAt(8)) || isNaN(dateText.charAt(9)) ){
		console.log("Invalid Date");
	}
	else {
		console.log("Valid Date");
	}

	var userNameText = document.getElementById("userName").value; 
	if(userNameText == ""){
		console.log("Invalid userName");
	}
	else {
		console.log("Valid UserName");
	}

	var passwordText  = document.getElementById("pass").value; 
	if(passwordText != "12345"){
		console.log("Invalid password");
	}
	else{
		console.log("Valid password");
	}
	
}


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if(e.keyCode >= 51 && e.keyCode <= 57){
    	console.log("number Pressed");
    }
    else if(e.keyCode >= 65 && e.keyCode <= 90){
    	console.log("Letter Pressed");
    }
    else{
    	console.log("Odd thing Pressed");
    }

    document.getElementById("keyDisplay").innerHTML= String.fromCharCode(e.keyCode); 

}






