$(document).ready(function() {

  $("li#buttonColor").click(function() {
    $("li#buttonColor").toggleClass("active");
    $("body").toggleClass("invertColor");
    $("body").toggleClass("background");
  });

  $("button#confirmButton").click(function() {
    var age = parseInt(prompt("What is your age?"));

     if (age > 18) {
       $(".container").show();

     } else if (age === 18) {
       $(".container").show();
       alert("Your vote matters!!");

     } else {
       $("#p1").show();

     }

  });

});
