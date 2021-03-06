function popup() {
    $('.popupClose, .overlay').on('click', function (event) {
        $('body').css('overflow', 'auto');
        $('.popup, .overlay, .header__search, .popup__container, .nav-container, .header-humb, .collapsible__container').removeClass('visible');
    });
    
    $(".humb-open").click(function () {
        $(".header-humb, .overlay").addClass("visible");
    });

    if ($(window).width() <= 768) {
        $(".header__catalog").click(function() {
            $(".collapsible__container, .overlay").addClass("visible");
            
        });
        $(".search-open").click(function() {
            $(".header__search").addClass("visible");
        });
    }


    // $(".popup__container >").click(function() {
    //     $('.popup').removeClass("visible");
    // });

    $(".form-reset").click(function() {
        $(this).closest('form').find('input').val('');
    });

    $('.popup-thanx-button').trigger("click");

    $(".m-print").click(function() {
        window.print();
    });

    $(".popup, .popup__container").click(function(e) {
        if (e.target == this) {
            $('body').css('overflow', 'auto');
            $('.popup, .overlay, .header-menu, .humburger-overlay, .period').removeClass('visible');
        }
    });
    $(".datahref").click(function() {
        var href= $(this).attr("data-href");
        var popup = $(this).attr("data-popupBlock");
        $("."+popup).find("form").attr("action", href);
    });
    $(".dataserv").click(function() {
        var href= $(this).attr("data-serv");
        var popup = $(this).attr("data-popupBlock");
        $("."+popup).find(".serv-hidden").val(href);
    });

    // if ($(".popup").hasClass('visible')) {
    //     $(".popup__container").addClass('visible');
    // } else {
    //     $(".popup__container").removeClass('visible');
    // }        

    $(".callPopup").on('click', function (event) {
        event.preventDefault();
        $(".popupClose").trigger("click");
        var popup = $(this).attr('data-popupBlock');
        // if ($('.' + popup).hasClass('popup--notfixed')) {
        //     $('.' + popup).scroll(function () {
        //         $('.' + popup).css('top', $(window).scrollTop()+ "px");
        //     });
        // };
        $('body').css('overflow', 'hidden');
        $('.overlay').addClass('visible');
        $('.' + popup).addClass('visible');
    });


}