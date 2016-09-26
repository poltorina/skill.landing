$(document).ready(function() {
	var imgHeight = $('.clients .carousel .slider-nav img').height();
	imgHeight = imgHeight / 4.57;
	$('.clients .carousel .slider-nav').css('top', imgHeight + 'px');

});	