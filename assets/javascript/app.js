var thisObj;
var timeID;

$(window).on("load", function() {
  //Index Page
  debugger;
  setTimeout(function() {
    $(".fly-in-text").removeClass("hidden");
  }, 500);

  //Other Pages
  $(".logo-thisObj").on({
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
      thisObj = $(this);
      timeID = setTimeout(() => {
        showProjectContents();
      }, 700);
    },
    mouseleave: function() {
      clearTimeout(timeID);
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

function showProjectContents() {
  console.log("Entered Time out");
  console.log(thisObj);

  thisObj.find(".project-name").hide();
  thisObj.find(".project-description").show();
  thisObj.find(".project-image").show();
  thisObj
    .find(".project-links")
    .show()
    .css("display", "flex");
  thisObj.css("justify-content", "space-between");
  waited = false;
}
