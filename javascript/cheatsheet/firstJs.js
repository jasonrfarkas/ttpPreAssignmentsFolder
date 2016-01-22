// JAVASCRIPT CHEAT SHEET

 //one type of comment
 /*
	multiline comment
 */

//variables:
var a = 7;
var b = 8; 
var c= "HELLO WORLD";

//alerts
alert('hi!');

//console
console.log("My Content");
console.log(a+b);
console.log(c);

a= "bob"
b=" the mob"
console.log(a+b);

//array
var a= [3,2,5,1];
console.log(a[2]);

//basic object
var ob1 = {p1: " the man", p3: "who", p2: 5}
console.log(ob1.p3 + ob1.p2);

//complicated object
var json = {firstName: "Jason", lastName:"Farkas", intrests: ["mtg","coding","stuff"]}
console.log(json.intrests[2]);


// if statement:
if (3<1){
	console.log(json.intrests[2]);
}
else{
	console.log(json.intrests[1]);
}

//function1:
 function doSomething(){ 
 	document.getElementById('jsField').innerHTML = "man o man" ; 
 }
 

//1st function for input taking:
function inputH1(x,y){
	alert(x+y);
}

//2nd function for input taking:
function inputH2(x,y){
	console.log(x-y);
}

//3rd function for input taking:
function inputH3(x,y){
	console.log(x*y);
}



//Create a script with two variables assigned to two numbers. Add them together and output the result to the console. Now do the same with two strings.
var v1= 23;
var v2 = 94;
console.log(v2+v1);
v1= "bob";
v2 = "mob";
console.log(v2+v1);

//Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
//multidimentional array
var mda= [ ["grr", "grr", "grrr", "grrrr"], ["Hi", "I", "am","a", "platypus"], ["grr", "grr", "grrr", "grrrr"],["I", "am", "trapped", "in the computer"]];
for( i=0; i< mda.length; i++){
	for( j=0; j<mda[i].length; j++){
		console.log(mda[i][j]);
	}
	if(i%2==0){
		console.log("That means");
	}
}


//Write a script that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. If it is not, using the console, let the user know that what the variable was and that it was greater than 10.
var test = 34;
if(test <10){
	alert("variable is less than 10");
}
else{
	console.log("variable was and is greater or equal to 10");
}

// Write a similar program to check if a string stored in a variable is the same as another string.
var stringTest="same?"
if(stringTest === "same?" ){
	alert("variable is  the same");
}
else{
	console.log("variable is not the same");
}

// Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options.
function doorSelection(doorNum){
	if(doorNum===1){
		alert("prize behind door number 1: a potato");
	}
	else if( doorNum===1){
		alert("prize behind door number 2: a goat");
	}
	else{
		alert("prize behind door number 3: a chance to play again");
	}
}








function printOnBe(){
	var input = document.getElementById('input').innerHTML;
	var inputn= parseFloat(input);
	if (inputn<1){
		console.log("Hi");
		inputn+=1;
		document.getElementById('input').innerHTML = inputn;
	}
	else{
		console.log("Bye");
		inputn-=1;
		document.getElementById('input').innerHTML = inputn;
	}

	/*for( i=-4; i<inputn; i++){
		console.log("-");
		break;
	}*/
}

function changeInput(){
	var ui= prompt("What should the input be");
	document.getElementById('input').innerHTML = ui;
}














