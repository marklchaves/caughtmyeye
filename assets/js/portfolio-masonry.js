// Refactored (called twice) 3 November 2019. ~mlc
function loadMasonry() {
  var grid = $(".grid__item");
  var container = document.querySelector(".archive");
  // Get reference to loading screen. Research what this is supposed to do. ~mlc
  var loading_screen = document.getElementById("loading");
  imagesLoaded(container, function() {
    grid.fadeIn();

    // Let's only do the masonry for large displays that are not on Safari.
    if ((document.body.clientWidth >= 1024) && (navigator.userAgent.indexOf("Safari") == -1)) {
      var msnry = new Masonry(document.querySelector(".archive"), {
        columnWidth: 300,
        gutter: 10,
        itemSelector: ".grid__item",
        percentPosition: true,
        horizontalOrder: true
      });
    }
  });
}

window.onload = function() {
  this.loadMasonry();
};

window.onresize = function() {
  this.loadMasonry();
};

window.onorientationchange = function() { 
  // window.location.reload();
  // Try to reload masonry only.
  this.loadMasonry();
}

// Don't know what this is for. ~mlc
function hideLoading(loading_screen) {
  loading_screen.classList.add("hidden");
}