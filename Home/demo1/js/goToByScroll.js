function goToByScroll(id) {
	'use strict';

	// Assign the HTML, Body as a variable...
	var $viewport = $('html, body');

	$viewport.animate({
		scrollTop: $("#" + id).offset().top // set scrollTarget to your desired position
	}, 1000);

	// Stop the animation if the user scrolls. Defaults on .stop() should be fine
	$viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup touchstart", function(e) {
		if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
			$viewport.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup touchstart'); // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
		}
	});
}