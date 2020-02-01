// Refactored (called twice) 3 November 2019. ~mlc
function loadMasonry() {
  var grid = $(".grid__item");
  var container = document.querySelector(".archive");
  // Get reference to loading screen. Research what this is supposed to do. ~mlc
  var loading_screen = document.getElementById("loading");
  imagesLoaded(container, function() {
    grid.fadeIn();

    if (document.body.clientWidth >= 1024) {
      var msnry = new Masonry(document.querySelector(".archive"), {
        columnWidth: 300,
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
  window.location.reload();
}

// Don't know what this is for. ~mlc
function hideLoading(loading_screen) {
  loading_screen.classList.add("hidden");
}