
$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	popup ();
	// forms();

	var swiper = new Swiper('.m-slider', {
		autoplay: {
			delay: 5000,
		},
		parallax: true,
		speed: 1600,
		loop: true,
		keyboard: {
			enabled: true,
		},
		pagination: {
			el: '.m-slider-pag',
			clickable: true,
		},
		mousewheel: true,
	});
	
	$(".prod-slider").find(".prod").addClass("swiper-slide");
	var swiper = new Swiper('.new__slider', {
		spaceBetween: 30,
		slidesPerView: 3,
		navigation: {
			nextEl: '.new-slider-next',
			prevEl: '.new-slider-prev',
		},
	});
	var swiper = new Swiper('.pop__slider', {
		spaceBetween: 30,
		slidesPerView: 3,
		navigation: {
			nextEl: '.pop-slider-next',
			prevEl: '.pop-slider-prev',
		},
	});
	var swiper = new Swiper('.dc__slider', {
		spaceBetween: 30,
		slidesPerView: 3,
		navigation: {
			nextEl: '.dc-slider-next',
			prevEl: '.dc-slider-prev',
		},
	});
	$('.collapsible').collapsible();
	
	$(document).ready(function() {
		$('select').niceSelect();
	});

	$('.form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				number: {
					digits: true,
					required: false,
					maxlength: 4,
				}
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
						var rowId = it.closest('tr').data("id");
					}
				});
			},  
         });
	 });
	 $(".cat__item").each(function() {
		var title = $(this).text();
		$(this).attr("title", title);
	 });

	 $(".m-img-cont").each(function() {
		var image = $(this).find("img").attr('src');
		$(this).css("background-image", "url("+image+")")
	 });

	 $(".label").each(function() {
		var discount = $(this).attr("data-discount");
		$(this).find(".dcount__val").text(" " +discount + "%");
	 });
	 
	 $(document).on('click', '.number-input-container .number-increment', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            max = parseInt($input.attr('max')),
            step = parseInt($input.attr('step'));
		let temp = val + step;
		$input.val(temp <= max ? temp : max);
		$(".number-result").text($input.val());
    });
    $(document).on('click', '.number-input-container .number-decrement', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            min = parseInt($input.attr('min')),
            step = parseInt($input.attr('step'));
		let temp = val - step;
		$input.val(temp >= min ? temp : min);
		$(".number-result").text($input.val());
	});
	

	$("body").on("click", ".like", function()  {
		$(this).toggleClass("liked");
		$(this).find(".before").toggleClass("liked");
	});
	
	 
})