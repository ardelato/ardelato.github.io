$(window).on("load", function() {
  //Index Page
  setTimeout(function() {
    $(".fly-in-text").removeClass("hidden");
  }, 500);

  //Other Pages
  $(".logo-container").on({
    click: function() {
      window.location.href = "index.html";
    },
    mouseenter: function() {
      $(".hover-fly-text").removeClass("hidden");
    },
    mouseleave: function() {
      $(".hover-fly-text").addClass("hidden");
    }
  });

  //Portfolio Page
  $(".project").on({
    mouseenter: function() {
      $(this)
        .find(".project-name")
        .hide();
      $(this)
        .find(".project-description")
        .show();
      $(this)
        .find(".project-image")
        .show();
      $(this).css("justify-content", "flex-start");
    },
    mouseleave: function() {
      $(this)
        .find(".project-name")
        .show();
      $(this)
        .find(".project-description")
        .hide();
      $(this)
        .find(".project-image")
        .hide();
      $(this).css("justify-content", "center");
    }
  });
});
