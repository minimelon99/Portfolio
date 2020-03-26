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
  /////////////scrolling stuff
  // var home = $(".home");
  // if (!home) {
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    var liOne = $("#problemstatement").offset().top;

    ///////if scrolling goes past the header
    if (scrollTop > liOne) {
      //You are now past div one
      $("aside").removeClass("hide-bar");
      $("aside").addClass("side-tracker");
    } else {
      $("aside").removeClass("side-tracker");
      $("aside").addClass("hide-bar");
    }
    $(".side-tracker a").click(function() {
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },
        500
      );
      return false;
    });

    // Cache selectors
    var topMenu = $(".side-tracker"),
      topMenuHeight = topMenu.outerHeight() + 15,
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
          return item;
        }
      });

    // Bind to scroll
    $(window).scroll(function() {
      // Get container scroll position
      var fromTop = $(this).scrollTop() + topMenuHeight;

      // Get id of current scroll item
      var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop) return this;
      });
      // Get the id of the current element
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";
      // Set/remove active class
      menuItems
        .parent()
        .removeClass("active")
        .end()
        .filter("[href='#" + id + "']")
        .parent()
        .addClass("active");
    });
  });

  //}
  //////////////
});
