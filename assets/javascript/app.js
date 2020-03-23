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
});
