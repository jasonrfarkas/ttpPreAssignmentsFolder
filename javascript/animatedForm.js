
$(document).ready(function(){

	$(".error_message").hide();
	$(".error_message").css('position', "fixed");
	$(".error_message").css('position', "90%");
	$(".error_message").css('textAlign', "center");
	$(".error_message").css('margin', "auto");
	$(".error_message").css('border', "solid black 1px");


	$("#clicker").click( function() { 

		u= $("#userName").val();
		p=$("#pass").val();

		if( u == "open" && p == "sesame"){
			window.location.replace("account.html");
		}
		else{
			$( ".error_message" ).show("slow");
			$( ".error_message" ).click(function(){ $( ".error_message" ).hide("slow"); } );
		}
		
	} ) ;

	
	



})



	