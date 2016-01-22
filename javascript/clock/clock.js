
function updateClock(){
	var d = new Date();
	document.getElementById("hours").innerHTML = d.getHours();
	document.getElementById("minutes").innerHTML = d.getMinutes();
	document.getElementById("seconds").innerHTML = d.getSeconds();
	document.getElementById("milliseconds").innerHTML = d.getMilliseconds();	
}



$(document).ready(function(){
	//updateClock();
	var tid = setInterval(updateClock, 2); 
})