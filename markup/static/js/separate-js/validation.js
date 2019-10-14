$(document).ready(function() {
    // $(".header__search-field").keydown(function() {
	// });
    $(".header__search-field").keyup(function() {
		$(".header__search-result").toggleClass("visible");
	});

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

		});
	});
	$('.reviews__form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				required: true,
			},

			errorPlacement: function (error, element) {
			},

			
			// .reviews-popup
		});
	});
	$('.account-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				name: {
					required: false,
				},
				country: {
					required: false,
				},
				surName: {
					required: false,
				},
				email: {
					required: false,
					email: true,
				},
				city: {
					required: false,
				},
				father: {
					required: false,
				},
				adress: {
					required: false,
				},
				index: {
					required: false,
					digits: true,
				},
				phone: {
					required: false,
					minlength: 17,
				},
				password: {
					required: false,
					minlength: 5,
				},
				passwordAgain: {
					required: false,
					equalTo: "#password-again",
				},
				passwordOld: {
					required: false,

				},
			},

			errorPlacement: function (error, element) {
			},

		});
	});

	$('.m-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				name: {
					required: true,
				},
				email: {
					email: true,
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
				console.log('fsfafs');
				$(".call-submit-popup").trigger("click");				
			},  
		});
	});

	$('.bonus-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				name: {
					required: true,
				},
				email: {
					email: true,
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
				console.log('fsfafs');
				$(".call-bonus-popup").trigger("click");				
			},  
		});
	});

	$('.call-form').each(function() {
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
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$(".call-submit-popup").trigger("click");				
			},  
		});
	});

    
});