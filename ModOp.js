javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="https://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.3.2",function($,L){
speed=prompt("Is completion time important? yes/no (it could require filtering out some devices)","yes");
speed = speed[0]=='y';
alert(speed);
var redsquare = $('<div id="slider"></div>');

// append it to the body:
$('body').append(redquare);

// style it:
redsquare.css({
    position: 'fixed',
    top: '10px',
    right: '10px',
    width: '200px',
    height: '90px',
    backgroundColor: 'red',
	'z-index': 100000
});



});
