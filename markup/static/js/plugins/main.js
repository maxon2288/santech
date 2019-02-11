
$(document).ready(function () {

	$('input[name="phone"]').mask("+ 7 000 000 00 00");

	//VALIDATION---------------------------
	$('.form-reg').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				name: {
					required: true,
				},
				phone: {
					required: true,
					minlength: 17,
				},
				password: {
					required: true,
					minlength: 5,
				},
				passwordAgain: {
					required: true,
					equalTo: "#password-again",
				},
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
						it.find("input, textarea").val("");
						it.find("input, textarea").removeClass('is-focus');
					}
				});
			},  
		});
	});
	$(".m-field").change(function() {
		if ($(this).val().length > 0) {
			$(this).addClass("is-focus");
		} else {
			$(this).removeClass("is-focus");
		}
	});	
	//VALIDATION---------------------------
	
	$("body").css({'visibility': "visible", "opacity": "1"});
	popup ();
	// forms();

	var swiper = new Swiper('.m-slider', {
		autoplay: {
			delay: 5000,
		},
		spaceBetween: 5,
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

	if ($('.scene').length > 0) {
		var scene = $('.scene').get(0);
		var parallaxInstance = new Parallax(scene);

	}
	$(".m-field").each(function() {
		var plh = $(this).attr("placeholder");
		$(this).closest(".m-field__container").append(`
		<div class="placeholder">${plh}</div>
		`)
	});
	$(".m-field__container").click(function() {
		$(this).find("input").focus();
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
	// $('input[type="range"]').rangeslider();
	
	$(document).ready(function() {
		$('select').niceSelect();
	});

	
	 
	 $(".tooltip").each(function() {
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

	if ( +$(".like-count").text() == 0) {
		$(".like-count").css({
			"opacity": "0"
		})
	}
	if(+$(".like-count").text() != 0) {
		$(".like-count").css({
			"opacity": "1"
		})	
	}

	$("body").on("click", ".like-trigger", function()  {
		$(this).removeClass("like-trigger");
		$(".like-count").text(+$(".like-count").text() + 1);
		$(this).addClass("liked");
		$(this).find(".before").toggleClass("likes");
		if ( +$(".like-count").text() == 0) {
			$(".like-count").css({
				"visibility": "hidden",
				"opacity": "0"
			})
		}
		if(+$(".like-count").text() != 0) {
			$(".like-count").css({
				"visibility": "visible",
				"opacity": "1"
			})	
		}
	});
	$("body").on("click", ".liked", function()  {
		$(this).removeClass("liked");
		$(".like-count").text(+$(".like-count").text() - 1);
		$(this).addClass("like-trigger");
		$(this).find(".before").toggleClass("likes");
		if ( +$(".like-count").text() == 0) {
			$(".like-count").css({
				"opacity": "0"
			})
		}
		if(+$(".like-count").text() != 0) {
			$(".like-count").css({
				"opacity": "1"
			})	
		}
	});
	
	// $('.range-slider').rangeslider({
	// 	polyfill:false,
	// 	// onInit:function(){
	// 	// 	$('.header .pull-right').text($('input[type="range"]').val()+'K');
	// 	// },
	// 	// onSlide:function(position, value){
	// 	// 	$('.header .pull-right').text(value+'K');
	// 	// },
	// 	// onSlideEnd:function(position, value){
	// 	// }
	// });

	if ($('#slider').length > 0) {
		var slider = document.getElementById('slider');
		var rangeMin = $("#slider").data("min")
		var rangeMax = $("#slider").data("max")
		var rangeStep = $("#slider").data("step")
		$(".output-left").text(parseFloat(rangeMin).toFixed(0));
		$(".output-right").text(parseFloat(rangeMax).toFixed(0));
		noUiSlider.create(slider, {
			start: [rangeMin, rangeMax],
			connect: true,
			step: rangeStep,
			range: {
				'min': rangeMin,
				'max': rangeMax
			},
			format: wNumb({
				decimals: 0
			})
		});
	
		$(".noUi-handle-lower").mousemove(function() {
			var val = $(this).find("span").text();
			$(".output-left").text(parseFloat(val).toFixed(0));
		});
		$(".noUi-handle-upper").mousemove(function() {
			var val = $(this).find("span").text();
			$(".output-right").text(parseFloat(val).toFixed(0));
		});
	}


	 
})