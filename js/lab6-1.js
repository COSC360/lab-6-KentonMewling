/* jQuery and JavaScript code here for lab6-1.html */

$(document).ready(function () {
    var title = $("#pageTitle");
    title.html("Lab 6 - DOM Manipulation With jQuery");

    var text = $("#msgArea");
    text.html("my class is " + $("#msgArea").attr("class")); 

    var bttn = $(".btn-primary");
    bttn.css("background-color", "red");

    var body = $("body");
    body.css("background-color", "ivory");

    var panel = $(".center-icons");
    panel.addClass("selected");


    $(".panel").click(function(){
        $("#message").html("You clicked this panel");
    });

    });  

