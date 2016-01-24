
function updateClock(){
	var d = new Date();
	var hrs = d.getHours();
	var min =  d.getMinutes();
	var seconds=  d.getSeconds();
	var mili= 	d.getMilliseconds();	

	document.getElementById("hours").innerHTML = hrs;
	document.getElementById("minutes").innerHTML = min;
	document.getElementById("seconds").innerHTML = seconds;
	//document.getElementById("milliseconds").innerHTML = 

	var c1 = ((seconds*hrs+mili/min )%256).toFixedDown(0) ;
	var c2 = ((mili/hrs*min+seconds )%256).toFixedDown(0);
	var c3 = ((hrs*mili+seconds/min)%256).toFixedDown(0);
	var a = ((.5*hrs+ .3*min + .2 *seconds)/100).toFixedDown(2);
	var color = "rgba("+c1+" ,"  +c2+" ,"  +c3+ "," + a+")";

	console.log(color);
	$(document.body).animate({
          backgroundColor: color,
        }, 10000);

}



$(document).ready(function(){
	//updateClock();
	updateClock()
	var tid = setInterval(updateClock, 9999); 
})


Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};





