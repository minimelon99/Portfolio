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
    if ($(this).scrollTop() < $(this).height()) {
      $(".header-nav").css({ "background-color": "transparent" });
    } else {
      $(".header-nav").css({
        "background-color": "white",
        transition: "background-color 200ms linear"
      });
    }
  });
});
