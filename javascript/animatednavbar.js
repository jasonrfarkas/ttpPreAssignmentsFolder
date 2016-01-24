$(document).ready(function(){
	$(".navDiv").css({
		"position": "fixed",
		"width":"100%",
		"margin": "0px auto",
		"textAlign": "center",
		"background-color": "rgba(200,200,200,.7)", 
		"top":"0px",
		"left": "0px",
		"padding": "0"
	});
	$(".navb").css({
		"width":"100%",
		"margin": "0 auto",
		"textAlign": "center",
		"padding": "0"
	});
	$(".navul").css({
		"display": "inline-block", 
		"font-size" : "20px",
		"padding": "0"
	});
	$(".navli").css({
		"background-color": "rgba(200,200,200,.9)", 
		"list-style-type": "none",
		"margin": "0 15",
		"float" :"left",
		"padding": "0"
	});
	$(".navli").hover( function (){
							$(this).animate({
							    opacity: [ 0.25, "linear" ]
							}, 300 );
						}
					);
	$(".navli").mouseout( function (){
							$(this).animate({
							    opacity: [ 1, "linear" ]
							}, 300 );
						 });

	$(".spacer").css({
		"margin-bottom": "70px"
	});

	//var os = navigator.platform;
	//console.log(navigator.userAgent);
	/*for(var i in navigator){
   		console.log(i+"="+navigator[i]+'<br>');
	}*/
	var OSName="Unknown OS";
	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
	else if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
	else if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
	else if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

	console.log('Your OS is: '+OSName);
	//console.log("browser is:" + navigator.userAgent)

	$(window).resize(function() {
  	//resize just happened, pixels changed
  		console.log($(window).height()); // New height
  		console.log($(window).width()); // New width);
	});

})