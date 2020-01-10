// Refactored (called twice) 3 November 2019. ~mlc
function loadMasonry() {
  if (window.screen.width >= 1024) {
    var grid = $(".grid__item");
    var container = document.querySelector(".archive");
    // Get reference to loading screen
    var loading_screen = document.getElementById("loading");
    imagesLoaded(container, function() {
      grid.fadeIn();

      var msnry = new Masonry(document.querySelector(".archive"), {
        columnWidth: 300,
        itemSelector: ".grid__item",
        percentPosition: true,
        horizontalOrder: true
      });
    });
  }
}

window.onload = function() {
  this.loadMasonry();
};

$(window).on("load", function() {
  loadMasonry();
});

// Added this call to fix switching to mobile view. ~mlc
$(window).on("resize", function() {
  loadMasonry();
});

function hideLoading(loading_screen) {
  console.log("hideLoading()");
  loading_screen.classList.add("hidden");
}

window.addEventListener('orientationchange', function () {
  var originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');
  document.body.style.display='none';
  setTimeout(function () {
    document.body.style.display = originalBodyStyle;
  }, 10);
});