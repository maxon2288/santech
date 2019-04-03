
$(document).ready(function () {


	
	$("table th").each(function() {
		if ($(this).text() == '') {
			$(this).html('&nbsp;');
		}
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

	new WOW().init();

	
	
	if ($(window).width() <= 1024) {
		var a = $('.collapsible__container').remove();
		a.appendTo('.header');
		console.log($(document).width());
	}
	
	$(".td-delete-button").click(function() {
		var it = $(this).closest(".swiper-slide");
		$(this).closest(".swiper-slide").addClass("opacity");
		$(this).closest(".swiper-slide").addClass("margin");
		$(this).closest(".swiper-slide").addClass("display");	
	});

	var swiper = new Swiper('.m-slider', {
		autoplay: {
			delay: 5000,
		},
		spaceBetween: 5,
		slidesPerView: 1,
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
	var swiper = new Swiper('.quality-slider', {
		slidesPerView: 6,
		parallax: true,
		speed: 1600,
		loop: true,
	});


	if ($(".table-slider .swiper-slide").length > 2) {
		var swiper = new Swiper('.table-slider', {
			slidesPerView: 2,
			grabCursor: true,
			keyboard: {
				enabled: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 1,
				}
			},
		});
	}
	if ($(".table-slider .swiper-slide").length < 1) {
		$(".table-slider .swiper-slide").closest(".swiper-container").remove();
	}

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
		breakpoints: {
			425: {
				slidesPerView: 3,
			},
		},
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
	$(".scene").each(function() {
			var scene = $(this).get(0);
			var parallaxInstance = new Parallax(scene);
	});

	$(".m-field, .m-field-2").each(function() {
		var plh = $(this).attr("placeholder");
		$(this).closest(".m-field__container").append(`
		<div class="placeholder">${plh}</div>
		`)
	});

	$(document).on("click", ".basket-button", function() {
		var it = $(this).closest(".basket-container");
		var price = +it.find(".basket-price").attr("data-price");
		$(".header-basket-result").text(+$(".header-basket-result").text() + price) ;
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
		breakpoints: {
			1023: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 1,
			}
		}
	});
	var swiper = new Swiper('.pop__slider', {
		spaceBetween: 30,
		slidesPerView: 3,
		navigation: {
			nextEl: '.pop-slider-next',
			prevEl: '.pop-slider-prev',
		},
		breakpoints: {
			1023: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 1,
			}
		}
	});
	var swiper = new Swiper('.dc__slider', {
		spaceBetween: 30,
		slidesPerView: 3,
		navigation: {
			nextEl: '.dc-slider-next',
			prevEl: '.dc-slider-prev',
		},
		breakpoints: {
			1023: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 1,
			}
		}
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

	 $(".m-bg-cont").each(function() {
		var image = $(this).find("img").attr('src');
		$(this).css("background-image", "url("+image+")")
	 });

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
		it.find(".input-val").text($input.val());
	});
	
    $(document).on('click', '.input-de', function(e) {
		var it = $(this).closest(".input-cont");
		let $input = $(this).siblings('.input-input'),

			val = parseInt($input.val()),
			min = parseInt($input.attr('min')),
			step = parseInt($input.attr('step'));
		let temp = val - step;
		$input.val(temp >= min ? temp : min);
		it.find(".input-val").text($input.val());
	});
	//basket

	$(document).on("click", ".basket-price-de", function(e) {
		var it = $(this).closest("tr")
		let input = it.find(".basket-price-input");
		var val = input.val();
		console.log(val);
		var price = it.attr("data-price");
		if (+it.find(".basket-price-result span").text() <= price) {
			it.find(".basket-price-result span").text(+it.find(".basket-price-result span").text() - 0)
		} else {
			it.find(".basket-price-result span").text(+it.find(".basket-price-result span").text() - +price)
		}
	});
	$(document).on("click", ".basket-price-i", function(e) {
		var it = $(this).closest("tr")
		let $input = it.find(".basket-price-input");
		var val = $input.val();
		console.log(val);
		var price = it.attr("data-price");
		it.find(".basket-price-result span").text(+it.find(".basket-price-result span").text() + +price)
	});
	
	// var basketLength =  $('.basket-price-tr').length;
	// for (i=0; i <= basketLength; i++) {
	// 	var cur = +$(".basket-price-tr").find(".basket-price-result span").text();
	// 	console.log(cur);
	// }
	//NUMBER


	$(".html__container table").wrap(`<div class="m-table"></div>`);
	$(".html__container img").wrap(`<div class="m-img"></div>`);
	
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

	$(".like-button").click(function() {
		$(this).addClass("like-button-liked");
		$(this).removeClass("like-button");
		$(".like-count").text(+$("like-count").text() + 1);
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
	$(".like-button-liked").click(function() {
		$(this).removeClass("like-button-liked");
		$(this).addClass("like-button	");
		$(".like-count").text(+$("like-count").text() - 1);
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

	///comprison-----------------------------

	$("body").on("click", ".comp-trigger", function()  {
		$(this).removeClass("comp-trigger");
		$(this).removeClass("callPopup");
		$(this).attr("data-popupBlock", "popup-comp-delete");
		$(".comp-count").text(+$(".comp-count").text() + 1);
		$(this).addClass("comped");
		if ( +$(".comp-count").text() == 0) {
			$(".comp-count").css({
				"visibility": "hidden",
				"opacity": "0"
			})
		}
		if(+$(".comp-count").text() != 0) {
			$(".comp-count").css({
				"visibility": "visible",
				"opacity": "1"
			})	
		}
	});

	$("body").on("click", ".comped", function()  {
		$(this).removeClass("comped");
		$(".comp-count").text(+$(".comp-count").text() - 1);
		$(this).attr("data-popupBlock", "popup-comp  ");
		$(this).addClass("comp-trigger");
		if ( +$(".comp-count").text() == 0) {
			console.log('fds');
			$(".comp-count").css({
				"opacity": "0"
				
			})
		}
		if(+$(".comp-count").text() != 0) {
			$(".comp-count").css({
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