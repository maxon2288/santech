$(document).ready(function() {
    // $(".header__search-field").keydown(function() {
	// });
    $(".header__search-field").keyup(function() {
		$.ajax({
			success: function(){
				$(".header__search-result").toggleClass("visible");
				
            }
        });
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

			submitHandler: function() {
				
			},  
		});
	});

    
});