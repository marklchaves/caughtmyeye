function loadMasonry() {

  // Let's only do the masonry for large displays.
  if (document.body.clientWidth < 1024) {
    return;
  }

  var grid = document.querySelector('.archive');
  var msnry;

  // Note: there's a known bug with this for Safari.
  imagesLoaded( grid, function() {
    // init Isotope after all images have loaded
    msnry = new Masonry( grid, {
      columnWidth: 300,
      gutter: 10,
      itemSelector: ".grid__item",
      percentPosition: true,
      horizontalOrder: true
    });
  });
}

window.onload = function() {
  this.loadMasonry();
};

window.onresize = function() {
  this.loadMasonry();
};

window.onorientationchange = function() { 
  this.loadMasonry();
}