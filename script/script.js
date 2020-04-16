$(function() {

    // ==================header scripts====================

    // header search fixation*********

    $('.header-search').click(function() {
        $('header').addClass('header-search-active');
        $('body').removeClass('mobile-active');
        $('.mobile-menu>ul>li>ul.level-1-menu>li').removeClass('active');
        $('.mobile-menu>ul>li:first-child').removeClass('active');
        $('.nav-selected').empty().attr('class', 'nav-selected');
    });
    $('.main-nav__search i.icon-cross').click(function() {
        $('header').removeClass('header-search-active');
    })


    // **********


    //  fixed header fixation***********
    nav_fix();

    $(window).scroll(function() {
        nav_fix();
    });

    function nav_fix() {
        var win_top = $(window).scrollTop();
        if (win_top > 950) {
            $('header').addClass('fixed-header');
        } else {
            $('header').removeClass('fixed-header');
        }
    }
    // **********


    // mobile-menu fix scripts***************

    $('.mobile-trigger').click(function() {
        $('body').addClass('mobile-active');
    })

    $('.mobile-menu-close').click(function() {
        $('body').removeClass('mobile-active');
        $('.mobile-menu>ul>li>ul.level-1-menu>li').removeClass('active');
        $('.mobile-menu>ul>li:first-child').removeClass('active');
        $('.nav-selected').empty().attr('class', 'nav-selected');
        $('ul.level-3-menu').slideUp();
    });

    $('.mobile-menu > .level-0-menu > li:first-child > span').click(function() {
        $(this).parent('li').addClass('active');
        $('.nav-selected').addClass('level-one-active text-orange active').append('<i class="icon-bookmark"></i> Services <i class="icon-chevron-down"></i>');
    });

    $('.mobile-menu .level-1-menu > li').click(function() {
        $(this).addClass('active');
        $('.nav-selected').removeClass('level-one-active text-orange').addClass('level-two-active active').empty();
    });
    $('.mobile-menu .level-1-menu > li:first-child').click(function() {
        $('.nav-selected').append('<i class = "icon-binoculars" ></i><div> Engage <span>Services</span> </div> <i class="icon-chevron-right"></i>');
    });
    $('.mobile-menu .level-1-menu > li:nth-child(2)').click(function() {
        $('.nav-selected').append('<img src="images/brand-icon.svg" alt=""><i class="icon-chevron-right"></i><div>Brand<span>Services</span></div>');
    });
    $('.mobile-menu .level-1-menu > li:nth-child(3)').click(function() {
        $('.nav-selected').append('<i class="icon-archery"></i><div> Niche <span>Services</span></div><i class="icon-chevron-right"></i>');
    });
    $('.mobile-menu .level-1-menu > li:nth-child(4)').click(function() {
        $('.nav-selected').append('<i class="icon-enter text-orange"></i><div class="text-orange"> Follow</div><i class="icon-chevron-right text-orange"></i>');
    });


    $(document).on('click', "div.level-one-active", function() {
        $(this).removeClass('level-one-active text-orange active').empty();
        $('.mobile-menu > .level-0-menu > li:first-child').removeClass('active');
    });
    $(document).on('click', "div.level-two-active", function() {
        $(this).removeClass('level-two-active').addClass('level-one-active text-orange').empty().append('<i class="icon-bookmark text-orange"></i> Services <i class="icon-chevron-down"></i>');;
        $('.mobile-menu .level-1-menu li').removeClass('active');
    });


    $('.mobile-menu ul.level-2-menu li').click(function() {

        $('ul.level-3-menu').slideUp();
        $(this).find('ul.level-3-menu').slideDown();

    });




    // *******************youtube video scripts***********

    $('.video-box').click(function() {
        $(this).addClass('video-active')
        var get_url = "https://www.youtube.com/embed/" + $(this).find('.youtube-video').attr('data-youtube') + "?rel=0&showinfo=0&autoplay=1";

        $(this).find('.youtube-video').append('<iframe allowfullscreen allow="autoplay" src="' + get_url + '"> </iframe>');
    });



    //================== Insights script===================


    $('.insights-nav ul li').click(function() {
        var get_link = $(this).children('span').text();
        $('.insights-nav ul li').removeClass('active');
        $(this).addClass('active');
        $('.insights-data').removeClass('active');
        $('.insights-data[data-info="' + get_link + '"]').addClass('active');
        $('.insights-content').removeClass('active');
    });
    $('.insights-content .insights-nav .insides-mobile button:nth-of-type(1)').click(function() {
        $('.insights-content').addClass('active');
    });
    $('.insights-content.active .insights-nav .insides-mobile button:last-child ').click(function() {
        $('.insights-content').removeClass('active');
    });




    //==================== footer scripts ====================

    // footer Collapse menu**********

    $('.footer__controls .footer__control-btn').click(function() {
        var foot_get_id = $(this).attr('data-target');
        $('.footer__controls .footer__control-btn').removeClass('active');
        $(this).addClass('active');
        $('.footer__data').slideUp();
        $(foot_get_id).slideDown();
        $('.footer__close i').show();

    });
    $('.footer__close').click(function() {
        $('.footer__data').slideUp();
        $('.footer__close i').hide();
    });



    // view more long sections===================

    var serv_item_size = $('.home-services-list li').length;
    var size_lst = 4;
    $('.home-services-list li:lt(4)').addClass('active');


    $('.home-services-list + .services__more.show_more').click(function() {

        size_lst = (size_lst + 4 <= serv_item_size) ? size_lst + 4 : serv_item_size;
        $('.home-services-list li:lt(' + size_lst + ')').addClass('active');

        if (size_lst == serv_item_size) {
            $('.home-services').addClass('fully-opened');
        }
    });

    $(document).on('click', ".home-services .services__more.close", function() {
        $('.home-services').removeClass('fully-opened');
        $('.home-services-list li').removeClass('active');
        size_lst = 4;
        $('.home-services-list li:lt(' + size_lst + ')').addClass('active');
        $("html, body").animate({
            scrollTop: $(".home-services").offset().top - 50
        }, 600)
    });


    $('.view-more').click(function() {
        $(this).parent('.long-text,.achievements-group').addClass('totally-open');
    });

    $('.view-less').click(function() {
        $(this).parent('.long-text,.achievements-group').removeClass('totally-open');
        $("html, body").animate({
            scrollTop: $(this).parent('.long-text, .achievements-group').offset().top - 50
        }, 400)
    });



    // About us Page==================

    // Popups

    $('.card-left-bg img, .leaders-card-content h3.heading,.leaders-card-content .btn-more-details').click(function() {
        $('.popup').hide();
        $(this).parents('.leaders-card').next('.popup').show(200);
    });

    $('.leaders-list li img,.leaders-list li h3.heading').click(function() {
        $('.popup').hide();
        $(this).nextAll('.popup').show(200);
    })
    $('.popup .icon-cross').click(function() {
        $('.popup').hide(200);
    })


    // sliders ====================


    function testimonials_desktop() {
        $('.slider-container').append(' <a class="slider-left testimonials__arrow testimonials__arrow_prev" href="javascript:void(0);"><i class="icon-chevron-left"></i></a><a class="slider-right testimonials__arrow testimonials__arrow_next" href="javascript:void(0);"><i class="icon-chevron-right" ></i></a>');

        var slide = $('.slider-single');
        var slideTotal = slide.length - 1;
        var slideCurrent = -1;

        function slideInitial() {
            slide.addClass('proactivede');
            setTimeout(function() {
                slideRight();
            }, 500);
        }

        function slideRight() {
            if (slideCurrent < slideTotal) {
                slideCurrent++;
            } else {
                slideCurrent = 0;
            }

            if (slideCurrent > 0) {
                var preactiveSlide = slide.eq(slideCurrent - 1);
            } else {
                var preactiveSlide = slide.eq(slideTotal);
            }
            var activeSlide = slide.eq(slideCurrent);
            if (slideCurrent < slideTotal) {
                var proactiveSlide = slide.eq(slideCurrent + 1);
            } else {
                var proactiveSlide = slide.eq(0);

            }

            slide.each(function() {
                var thisSlide = $(this);
                if (thisSlide.hasClass('preactivede')) {
                    thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
                }
                if (thisSlide.hasClass('preactive')) {
                    thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
                }
            });
            preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
            activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
            proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
        }

        function slideLeft() {
            if (slideCurrent > 0) {
                slideCurrent--;
            } else {
                slideCurrent = slideTotal;
            }

            if (slideCurrent < slideTotal) {
                var proactiveSlide = slide.eq(slideCurrent + 1);
            } else {
                var proactiveSlide = slide.eq(0);
            }
            var activeSlide = slide.eq(slideCurrent);
            if (slideCurrent > 0) {
                var preactiveSlide = slide.eq(slideCurrent - 1);
            } else {
                var preactiveSlide = slide.eq(slideTotal);
            }
            slide.each(function() {
                var thisSlide = $(this);
                if (thisSlide.hasClass('proactivede')) {
                    thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
                }
                if (thisSlide.hasClass('proactive')) {
                    thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
                }
            });
            preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
            activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
            proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
        }
        var left = $('.slider-left');
        var right = $('.slider-right');
        left.on('click', function() {
            slideLeft();
        });
        right.on('click', function() {
            slideRight();
        });
        slideInitial();
    }

    function testimonials_non_desktop() {
        $(".slider-content").not(".slick-initialized").slick({
            autoplay: true,
            infinite: !0,
            slidesToScroll: 1,
            arrows: !0,
            dots: !0,
            centerMode: !0,
            variableWidth: !0,
            pauseOnFocus: !1,
            adaptiveHeight: !0,
            prevArrow: '<a class="slider-left testimonials__arrow testimonials__arrow_prev" href="javascript:void(0);"><i class="icon-chevron-left"></i></a>',
            nextArrow: '<a class="slider-right testimonials__arrow testimonials__arrow_next" href="javascript:void(0);"><i class="icon-chevron-right"></i></a>'
        });
    }



    // banner cards ===========

    $('.cards').slick({
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        slidesToShow: 4,
        pauseOnFocus: false,
        waitForAnimate: true,
        responsive: [{
            breakpoint: 1450,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 1100,
            settings: {
                variableWidth: !0
            }
        }]
    });



    // home clients =============

    $('.home-clients .clients_list').slick({
        autoplay: true,
        infinite: true,
        slidesToScroll: 8,
        autoplaySpeed: 0,
        speed: 2000,
        // cssEase: "ease",
        arrows: false,
        dots: true,
        centerMode: true,
        variableWidth: true,
        initialSlide: 8,
        pauseOnFocus: true

    });


    // home key clients ================
    $('.home-key-clients .clients_list').slick({
        autoplay: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    centerMode: true
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    variableWidth: true
                }
            }, {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true
                }
            }

        ]

    });


    // featured clients slider=======================

    $('.featured-clients .clients_list').slick({
        autoplay: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                centerMode: true
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                centerMode: true
            }
        }, {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true
            }
        }]
    });




    // home awards slider ==================
    function home_awards() {
        $('.home-awards .list').slick({
            autoplay: false,
            infinite: true,
            arrows: false,
            autoplaySpeed: 2500,
            dots: true,
            pauseOnFocus: false,
            centerMode: true,
            variableWidth: true,
            slidesToShow: 1
        });
    }


    // importance sliders=================== 

    // tab slider----------

    $('.importance-bottom.importance-tab').not(".slick-initialized").slick({
        autoplay: !0,
        infinite: !0,
        arrows: !0,
        dots: !0,
        pauseOnFocus: !1,
        centerMode: !0,
        variableWidth: !0,
        prevArrow: '<a class="slider-left testimonials__arrow testimonials__arrow_prev" href="javascript:void(0);"><i class="icon-chevron-left"></i></a>',
        nextArrow: '<a class="slider-right testimonials__arrow testimonials__arrow_next" href="javascript:void(0);"><i class="icon-chevron-right"></i></a>'
    })



    function importance_slider() {
        $('.importance-bottom').slick({
            autoplay: 1,
            infinite: !0,
            arrows: !1,
            dots: !0,
            pauseOnFocus: !1,
            centerMode: !0,
            variableWidth: true
        });
    }

    // footer logo slider=====================
    function logo_list() {
        $(".logos-list").not(".slick-initialized").slick({
            autoplay: !0,
            infinite: !0,
            slidesToScroll: 1,
            arrows: !1,
            dots: !1,
            variableWidth: !0,
            centerMode: !0,
            pauseOnFocus: !1
        });
    }



    // about page===================

    // press articles

    $(".press__list").not(".slick-initialized").slick({
        autoplay: !1,
        infinite: !0,
        slidesToScroll: 1,
        slidesToShow: 6,
        arrows: !1,
        dots: !1,
        centerMode: !0,
        variableWidth: !0,
        pauseOnFocus: !1,
        focusOnSelect: !0,
        centerPadding: 0,
        asNavFor: ".press__article-grps"
    });

    $(".press__article-grps").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: ".press__list",
        adaptiveHeight: !0
    });


    function achievements() {
        $(".achievements-list").not(".slick-initialized").slick({
            autoplay: !1,
            infinite: !0,
            arrows: !1,
            dots: !0,
            pauseOnFocus: !1,
            rows: 3
        })
    }

    var window_width = $(window).width();

    if (window_width > 1200) {
        testimonials_desktop();
    }


    if (window_width < 1200) {
        testimonials_non_desktop();
        logo_list();
    }

    if (window_width < 991) {
        home_awards();
    }



    if (window_width < 767) {
        importance_slider();
        achievements();
    }


    // custom scrolls
    $(".scroll-vertical,.insights-nav ul,.insights-data-inner").mCustomScrollbar();



});