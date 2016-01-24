
$(document).ready(function(){
		//main functions
	$('p').click(function(){
		$('p').fadeToggle(1000);
	})
	/*console.log("NOTclicked");

	$(".mogleB").click(function(){
		console.log("clicked");

		$(".mogleOuter").show();

		var image= $("#mogleImage");
		centerImage(image);
		var imageURL = $(this).data("img-url"); 
		image.attr('src', imageURL);
		

		$(".mogleOuter").click(function(){
			$(".mogleOuter").hide();
			image.attr('src', "");
		})

	})

	function centerImage(picture){
		picture.load(function(){
			var page_height = $(window).height();
			console.log(page_height);
			var image_height = picture.height();
			console.log(image_height);
			var image_height_offset = (page_height - image_height)/2;
			console.log(image_height_offset);
			picture.css("margine-top", image_height_offset)

		})

	}*/



})



//alerts
	//alert('hi!');
//console
/*console.log("My Content");


 function doSomething(){ 
 	document.getElementById('jsField').innerHTML = "man o man" ; 
 }
 
//variables:
var a = 7;
var b = 8; 
console.log(a+b);
a= "bob"
b=" the mob"
//console.log(a+b);
//basic object
var ob1 = {p1: " the man", p3: "who", p2: 5}
console.log(ob1.p3 + ob1.p2);

//array
var a= [3,2,5,1];
console.log(a[2]);

//complicated object
var json = {firstName: "Jason", lastName:"Farkas", intrests: ["mtg","coding","stuff"]}
console.log(json.intrests[2]);*/


 //one type of comment
 /*
	multiline comment
 */


// if statement:

/*
if (3<1){
	console.log(json.intrests[2]);
}
else{
	console.log(json.intrests[1]);
}
*/

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

	for(int i=-4; i<inputn; i++){
		//console.log(json.intrests[1]);
		break;
	}
}

function changeInput(){
	var ui= prompt("What should the input be");
	document.getElementById('input').innerHTML = ui;
}






//})













