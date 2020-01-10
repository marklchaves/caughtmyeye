// Refactored (called twice) 3 November 2019. ~mlc
function loadMasonry() {
    // console.log("Inside portfolio-masonry.js");
    var grid = $('.grid__item');
    var container = document.querySelector('.archive');
	// Get reference to loading screen
	var loading_screen = document.getElementById('loading');
    imagesLoaded(container, function() {
        grid.fadeIn();

        var msnry = new Masonry(document.querySelector('.archive'), {
           columnWidth: 100%,
           itemSelector: '.grid__item',
           percentPosition: true,
           horizontalOrder: true,
        });
    });

}
$(window).on('load', function() {
    loadMasonry();
});

// Added this call to fix switching to mobile view. ~mlc
$(window).on('resize', function() {
    loadMasonry();
});

function hideLoading(loading_screen) {
    loading_screen.classList.add('hidden');
}