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
      $(this)
        .find(".project-links")
        .show()
        .css("display", "flex");
      $(this).css("justify-content", "space-between");
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
      $(this)
        .find(".project-links")
        .hide();
      $(this).css("justify-content", "center");
    }
  });
});
