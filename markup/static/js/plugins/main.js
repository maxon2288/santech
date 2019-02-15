
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

	$(".m-field, .m-field-2").change(function() {
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

	$('.zoom-image').each(function(){
		var originalImagePath = $(this).find('img').attr('data-orig');
		$(this).zoom({
			url: originalImagePath,
			magnify: 1
		});
		$(this).find(".zoomImg").wrap('<div class="product-zoom-img"></div>');
	});

		
	var galleryThumbs = new Swiper('.product-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		grabCursor: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.product-slider', {
		spaceBetween: 10,
		grabCursor: true,
		loopedSlides: 5, //looped slides should be the same
		navigation: {
			nextEl: '.product-slider-button-next',
			prevEl: '.product-slider-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});

	if ($('.scene').length != 0) {
		var scene = $('.scene').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	$(".m-field, .m-field-2").each(function() {
		var plh = $(this).attr("placeholder");
		$(this).closest(".m-field__container").append(`
		<div class="placeholder">${plh}</div>
		`)
	});



	$('.prod-delete').click(function() {
		$(this).closest(".prod").remove();
		if($(".prod").length < 1) {
			$(".account-nolike").addClass("visible")
		} else {
			$(".account-nolike").removeClass("visible")
		}
	});
	if($(".prod").length < 1) {
		$(".account-nolike").addClass("visible")
	} else {
		$(".account-nolike").removeClass("visible")
	}
	
	

	//tabs------------
	$(".tabs").each(function() {
		$('.tab').click(function(e) {
			e.preventDefault();
			var it = $(this);
			var href = it.attr("href");
			it.closest(".tabs-container").find(".tab").removeClass("active");
			it.addClass("active");
			$(".cont-tab").removeClass("active");
			it.closest(".tabs-container").find("." + href).addClass('active');
			it.closest('.tabs-container').find("." + href + " input").val('');
			it.closest('.tabs-container').find("." + href + " input").removeClass("is-focus");
		});
	});
	
	$(document).on("click",".docs__delete", function()  {
		$(this).closest(".docs__item").remove();
	});
	
	//tabs--------------
	$(".tab-input-cont").click(function() {
		var it = $(this);
		it.find(".tab-input:checked").each(function() {
			if ($(this).val() == "tab1") {
				$(".cont-tab").removeClass("active");
				$(".input-tab1").addClass("active");
				$(".input-tab1").find("input").val('');
				$(".input-tab1").find("input").removeClass('is-focus');
				$(".input-tab1").find("input").addClass('required');
			} else {
				$(".input-tab1").find("input").removeClass('required');				
			}
			if ($(this).val() == "tab2") {
				$(".cont-tab").removeClass("active");
				$(".input-tab2").addClass("active");
				$(".input-tab2").find("input").val('');
				$(".input-tab1").find("input").removeClass('is-focus');
				$(".input-tab1").find("input").addClass('required');
			} else {
				$(".input-tab1").find("input").removeClass('required');				
			}
			if ($(this).val() == "tab3") {
				$(".cont-tab").removeClass("active");
				$(".input-tab3").addClass("active");
				$(".input-tab1").find("input").removeClass('is-focus');
				$(".input-tab1").find("input").addClass('required');
			} else {
				$(".input-tab1").find("input").removeClass('required');				
			}
		});
	});

	$(".face-cont").click(function() {
		var it = $(this);
		if (it.find(".face:checked").val() == "yur") {
			$(".radio-yur").addClass("visible");
			var radio = $(".radio-yur").find("input").attr("data-radio")
			$(".radio-yur").find("input").attr("name", radio);				
			$(".radio-yur").find("input").prop("checked", true);					
		} else {
			$(".radio-yur").removeClass("visible");
			$(".radio-yur").find("input").attr("name", "noradio");				
			$(".radio-first").find("input").prop("checked", true);				
		}
	});


	$(".m-field__container").click(function() {
		$(this).find("input").focus();
	});

	$(".tolltip").each(function() {
		var title = $(this).text();
		$(this).attr("title", title);
	});

	$(".prod-slider").find(".prod").addClass("swiper-slide");
	$(".prod-slider").find(".serv").addClass("swiper-slide");
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

	//  $(".m-img-cont").each(function() {
	// 	var image = $(this).find("img").attr('src');
	// 	$(this).css("background-image", "url("+image+")")
	//  });

	 $(".label").each(function() {
		var discount = $(this).attr("data-discount");
		$(this).find(".dcount__val").text(" " +discount + "%");
	 });


	 // NUMBER INPUT
	 
	 $(".input-cont").each(function() {
		var it = $(this);
		let $input = $(this).find('.input-input'),

			val = parseInt($input.val()),
			min = parseInt($input.attr('min')),
			step = parseInt($input.attr('step'));
		it.find(".input-val").text($input.val());
	 });

	 $(document).on('click', '.input-i', function(e) {
		var it = $(this).closest(".input-cont");
		let $input = $(this).siblings('.input-input'),
		
            val = parseInt($input.val()),
            max = parseInt($input.attr('max')),
            step = parseInt($input.attr('step'));
		let temp = val + step;
		$input.val(temp <= max ? temp : max);
		$(".input-val").text($input.val());
	});
	
    $(document).on('click', '.input-de', function(e) {
		var it = $(this).closest(".input-cont");
		let $input = $(this).siblings('.input-input'),

			val = parseInt($input.val()),
			min = parseInt($input.attr('min')),
			step = parseInt($input.attr('step'));
		let temp = val - step;
		$input.val(temp >= min ? temp : min);
		$(".input-val").text($input.val());
	});
	//NUMBER

	//basket
	
	// $(".basket-i").click(function() {
	// 	var it = $(this).closest("tr");
	// 	var val = it.find(".input-input").val();
	// 	var price = it.attr("data-price");
	// 	it.find(".basket-result span").text(+val * +price);
	// });









	$(".lightgallery").lightGallery(); 

	
	if (+$(".like-count").text() == 0) {
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