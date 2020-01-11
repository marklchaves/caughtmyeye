// Refactored (called twice) 3 November 2019. ~mlc
function loadMasonry() {
  var grid = $(".grid__item");
  var container = document.querySelector(".archive");
  // Get reference to loading screen
  var loading_screen = document.getElementById("loading");
  imagesLoaded(container, function() {
    grid.fadeIn();

    if (window.screen.width >= 1024) {
      console.log("window.screen.width = " + window.screen.width);
      console.log("loadMasonry()");
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
  console.log("onload JS");
  this.loadMasonry();
};

window.onresize = function() {
  console.log("onresize JS");
  this.loadMasonry();
};

window.onorientationchange = function() { 
  console.log("onorientationchange JS");
  window.location.reload();
}

// Don't know what this is for. ~mlc
function hideLoading(loading_screen) {
  console.log("hideLoading()");
  loading_screen.classList.add("hidden");
}