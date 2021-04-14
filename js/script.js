jQuery('document').ready(function () {
	$('.bottom-body__button').on('click', function (e) {
		$('.bottom-body__button').toggleClass('active');
		if ($('#bottom-button').hasClass('active')) {
			$('.bottom-body__button').attr('href', '#bottom-menu');
		} else {
			$('.bottom-body__button').attr('href', '#');
		}
	})
	$('.burger').click(function (e) {
		$('.burger,.cart').toggleClass('active')
	})

	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 1200,
		easing: "ease-in",
		//fade: true,

	})
	//console.log("mouse location:", e.clientX, e.clientY)

	$('.tabs').on("swiperight", function (event) {
		$('.sidebar').addClass('show');
	});
	$('.tabs').on("swipeleft", function (event) {
		$('.sidebar').removeClass('show');
	});

	$('.tab').on('click', function (event) {
		$('.product-info__tabs .tab').removeClass('active');
		$(this).addClass('active');
	})

})

