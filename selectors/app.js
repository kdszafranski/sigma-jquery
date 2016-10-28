$(document).ready(function() {
  console.log("ready to go");

  // id
  // $("ul").first().css("background-color", "pink");
  // $("ul").last().css("background-color", "green");

  // $(".inner-p").parent().siblings().children().css("background-color", "teal");

  // $("li:odd").css("background-color", "purple");

  // class
  // $(".inner-p").css("background-color", "blue");

  // $(".my-list").children().find("li:odd").children().css("background-color", "magenta");

  $(".inner-p").parent().siblings().last().children().css("background-color", "olive");


});

console.log('not ready');
