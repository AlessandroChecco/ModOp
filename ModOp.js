javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="https://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.3.2",function($,L){
var errorscounter = 0;
if ($('.modop-active').length) {return false;}
$('body').append($('<div class="modop-active"></div>'))
$("<style>").attr("type", "text/css").html(".onoffswitch{float:right;position:relative;width:55px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.onoffswitch-checkbox{display:none}.onoffswitch-label{display:block;overflow:hidden;cursor:pointer;height:20px;padding:0;line-height:20px;border:0 solid #FFF;border-radius:30px;background-color:#9E9E9E}.onoffswitch-label:before{content:'';display:block;width:30px;margin:-5px;background:#FFF;position:absolute;top:0;bottom:0;right:31px;border-radius:30px;box-shadow:0 6px 12px 0 #757575}.onoffswitch-checkbox:checked+.onoffswitch-label{background-color:#42A5F5}.onoffswitch-checkbox:checked+.onoffswitch-label,.onoffswitch-checkbox:checked+.onoffswitch-label:before{border-color:#42A5F5}.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-inner{margin-left:0}.onoffswitch-checkbox:checked+.onoffswitch-label:before{right:0;background-color:#2196F3;box-shadow:3px 6px 18px 0 rgba(0,0,0,.2)}#foot-modop{position: absolute;bottom: 0;right: 0;}.error-modop{background-color: red;float: right;}.message-modop{color: black;align: left;text-align: left;}pre { font-family: monospace; }").appendTo("head");
//$("<style>").attr("type", "text/css").html("").appendTo("head");
var redsquare = $('<div id="slider-modop"><h1>ModOp</h1><hr><div id="question-speed"><span style="color:black;">Is speed important for this job?</span><div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="speed-modop"><label class="onoffswitch-label" for="speed-modop"></label></div></div></div>');
// append it to the body:
$('body').append(redsquare);
var closeme = $('<div id="foot-modop"><a href="javascript:void(0)">close ModOp</a></div>');
var useragentsmodop = $('<div id="usersa-modop" class="message-modop"><p>We detected there are many elements that could slow down mobile users: Use the following regex to filter them out: <br><pre>/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/</pre></p></div>');
var mobilewarnmodop = $('<div id="users-modop" class="message-modop"><p><br>Low screen resolutions induce longer task completion times in tasks containing images. Use some javascript filters to filter them out: <pre>$(window).width(); $(window).height() </pre></p></div>')
$('#question-speed').append(mobilewarnmodop);
$('#slider-modop').append(closeme);
$('#foot-modop').click(function(){ $('#slider-modop').remove(); $('.error-modop').remove(); $('.modop-active').remove(); return false; });
$('#users-modop').toggle($("#speed-modop").is(':checked'));
$("#speed-modop").click(function(){
	$('#users-modop').toggle($("#speed-modop").is(':checked'));
	$('#usersa-modop').toggle($("#speed-modop").is(':checked'));
	$('#speed3').toggle($("#speed-modop").is(':checked'));
});

// style it:
redsquare.css({
    position: 'fixed',
    top: '10px',
    right: '10px',
    width: '400px',
 //   height: '500px',
	padding: '30px',
    backgroundColor: 'lightgrey',
	'z-index': 100000,
	opacity: '0.9'
});

var input_counter=0;
$(":text,textarea").each(function(){
	input_counter+=1;
	if ($(this).width() < 20) {
		$(this).after("<div class='error-modop'>ModOp: Input too small!</div>");
		errorscounter += 1;
	}
	if ($(this).width() > 0.8*screen.width ) {
		$(this).after("<div class='error-modop'>ModOp: Input too big!</div>");
		errorscounter += 1;
	}
});


var big_image_counter=0;
$("img").each(function(){
	if ($(this)[0].clientWidth < 300 || $(this)[0].clientHeight < 300) {
		$(this).after("<div class='error-modop'>ModOp: Image size too small!</div>");
		errorscounter += 1;
	}
	if ($(this)[0].naturalWidth < 300 || $(this)[0].naturalHeight < 300) {
		$(this).after("<div class='error-modop'>ModOp: Image resolution too small!</div>");
		errorscounter += 1;
	}
	if ($(this)[0].clientWidth > screen.width || $(this)[0].clientHeight > screen.height) {
		$(this).after("<div class='error-modop'>ModOp: Image size too big!</div>");
		errorscounter += 1;
	}
	if ($(this)[0].naturalWidth > screen.width || $(this)[0].naturalHeight > screen.height) {
		big_image_counter+=1;
		errorscounter += 1;
	}
});

var nn=[]
$("input:checkbox:visible").each(function() { nn.push($(this).attr("name"))})
var counts = {};
nn.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
for (key in counts) {
	if (counts[key]>10) {
		$('input[name="'+key+'"]').each(function(){
			$(this).closest("div").parent().before( "<div class='error-modop'>ModOp: Too many checkboxes!</div>" );
			errorscounter++;
			return false;
		});
	}
}
var nn=[]
$("input:radio:visible").each(function() { nn.push($(this).attr("name"))})
var counts = {};
nn.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
for (key in counts) {
	if (counts[key]>5) {
		$('input[name="'+key+'"]').each(function(){
			$(this).closest("div").parent().before( "<div class='error-modop'>ModOp: Too many radioboxes!</div>" );
			errorscounter++;
			return false;
		});
	}
}
if (big_image_counter > 0) {
	$('#question-speed').append($('<p id="speed3" class="message-modop">We detected some images will require long time to download on slow connections. Please consider to resample them.</p>'));
	$('#speed3').toggle($("#speed-modop").is(':checked'));
}
if (input_counter > 10) {
	$('#report-modop').append($('<p class="message-modop">We detected many input field that are not suitable for mobile devices. Consider to filter them.</p>'));
	$('#question-speed').append(useragentsmodop);
	$('#usersa-modop').toggle($("#speed-modop").is(':checked'));
}
var errorsmodop = $('<hr><div id="errors-modop" class="message-modop"><p id="report-modop" class="message-modop">We detected <b>'+errorscounter+'</b> problems in this page!</p><div>');
$('#question-speed').append(errorsmodop);
if (errorscounter > 1) {
	$('#report-modop').append($('<p class="message-modop" style="color:red">They are signalled in red in the page.<p>'));
}
});
