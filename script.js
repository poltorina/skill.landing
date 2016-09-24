$(document).ready(function() {
	$('.clients .slider-nav li').click(function() {
		$('.clients .slider-nav li img').each(function(index, el) {
		var notHover = $(this).attr('src');
		notHover = notHover.slice(0, -8);
		activeImg = notHover + '-hov.png';
		notActiveImg = notHover + '-not.png';
			$(this).attr('src', notActiveImg);
		});

		var notHover = $(this).find('img').attr('src');
		notHover = notHover.slice(0, -8);
		activeImg = notHover + '-hov.png';
		$(this).find('img').attr('src', activeImg);
	})
	$('.clients .carousel .slider-for .slick-arrow').click(function() {





		$('.clients .slider-nav li').each(function(index, el) {
		var notHover = $(this).find('img').attr('src');
		notHover = notHover.slice(0, -8);
		activeImg = notHover + '-hov.png';
		notActiveImg = notHover + '-not.png';
			$(this).find('img').attr('src', notActiveImg);
		});

		var notHover = $('.slider-nav .slick-current img').attr('src');
		console.log(notHover)
		notHover = notHover.slice(0, -8);
		activeImg = notHover + '-hov.png';
		$('.slider-nav .slick-current img').attr('src', activeImg);
	})
});	