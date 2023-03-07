/* jQuery and JavaScript code here for lab6-1.html */
$(document).ready(function () {
    var test = false;
    var title = $("#pageTitle");
    title.html("Lab 6 - DOM Manipulation With jQuery");

    var text = $("#msgArea");
    text.html("my class is " + $("#msgArea").attr("class")); 

    var bttn = $(".btn-primary");
    bttn.css("background-color", "red");

    var body = $("body");
    body.css("background-color", "ivory");

    var center = $(".center-icons");
    center.addClass("selected");

    var panel2 = $("#panel-2");

    var image = $('<img></img>');
    image.attr("src", "images/art/thumbs/13030.jpg");
    panel2.append(image);


    $('body').mousemove(function(e){ 
        if((e.pageX<30 || e.pageX>229 || e.pageY < 579 || e.pageY> 779) && test == true){
            $("#message").html("The mouse has left");
        }
    });

    $(".panel").click(function(){
        $("#message").html("You clicked this panel");
        test = false;
    });

   $('.panel').mousemove(function(e){ 
    $('#message').html("X: " + e.pageX + " Y: " + e.pageY); 
    test =true;
    });

    $("#stories img").on("mouseenter", (function(){
        //	construct	preview	filename	based	on	existing	img
        var	alt	=	$(this).attr('alt');
        var	src	=	$(this).attr('src');								
        var	newsrc	=	src.replace("small","medium");
        //	make	dynamic	element	with	larger	preview	image	and	caption
        var	preview	=	$('<div	id="preview"></div>');
        var	image	=	$('<img	src="'	+	newsrc	+	'">');
        var	caption	=	$('<p>'	+	alt	+	'</p>');
        
        preview.append(image);
        preview.append(caption);
        $(this).append(preview);
        $(this).addClass('gray');
        $("#preview").fadeIn(1000);

        }));
    $("#stories img").on("mouseleave", (function(){
        $("#preview").fadeOut(1000);
        $(this).removeClass('gray');
    }));


});
