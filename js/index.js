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

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var liOne = $("#problemstatement").offset().top;

    if (scrollTop > liOne) {
      //You are now past div one
      $("aside").removeClass("hide-bar");
      $("aside").addClass("side-tracker");
    } else {
      $("aside").addClass("hide-bar");
    }
  });
});
