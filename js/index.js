$(document).ready(function() {
  // Write your code in here !
  $(".fa-bars").click(function() {
    //every time you click it, it add a class called "open"
    //toggle means if it's not there, add it, if it's there, remove it
    $(".mobile-menu").addClass("open");
  });

  $(".fa-times").click(function() {
    $(".mobile-menu").removeClass("open");
  });
});
