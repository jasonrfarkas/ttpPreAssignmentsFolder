//make sure the document elements loaded
$(document).ready(function(){
	$("div").css('position', "relative");
	$(".e7").css('position', "relative");
	//click functions
	$(".e1").click(function(){ //select e1, on click 
			$(".e3").hide("fast"); //hid e3
		})
	$(".e2").click(function(){ //select e1, on click 
			$(".e3").toggle("slow"); //hid e3
		})
	$(".e3").click(function(){ //select e1, on click 
			$(".e8").slideToggle(2000); //hid e3
			$( ".e10" ).animate({
    			left: [ "-=20", "swing" ],
			    opacity: [ 1, "linear" ]
				}, 2000 );
		})
	$(".e4").click(function(){ //select e1, on click 
			$(".e3").hide(); //hid e3

		})
	$(".e5").click(function(){ //select e1, on click 
			$(".e3").hide(); //hid e3
			$(".e9").css('background-color', "red");// change e4's background color
			$( ".e10" ).animate({
    			left: [ "+=20", "swing" ],
			    opacity: [ 0.5, "linear" ]
				}, 2000 );
		})
	$(".e6").click(function(){ //select e1, on click 
			$( "body *" ).filter( ":animated" ).stop();
		})
	$(".e7").hover(function(){ //select e1, on click 
			$(".e3").hide(); //hid e3
			$(".e7").css('background-color', "black");// change e4's background color
			$( ".e7" ).animate({
    			left: [ "-=50", "swing" ],
			    opacity: [ 0.25, "linear" ]
				}, 300 );
		})
	$(".e8").click(function(){ //select e1, on click 
			$( ".e1" ).hide( 500 ).delay( 1500 ).show( 300 );
			$(".e7").css('background-color', "black");// change e4's background color
			$( ".e7" ).animate({
    			left: [ "-=50", "swing" ],
			    opacity: [ 1, "linear" ]
				}, 300 );
		})
	$(".e9").click(function(){ //select e1, on click 
			$(".e3").show(); //hid e3
			$(".e7").css('background-color', "black");// change e4's background color

		})
	$(".e10").click(function(){ //select e1, on click 
			$(".e7").css('border', "5px solid red");
			$( ".e7" ).animate({
    			left: [ "+=50", "swing" ],
			    opacity: [ 0.25, "linear" ]
				}, 300 );
		})


	

})