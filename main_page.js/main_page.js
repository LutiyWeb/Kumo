$(document).ready(function() {

    // Slide first screen
    $('.video_slider').slick({
        dots: true,
        infinite: false,
        variableWidth: true,
        prevArrow: '<img src="img/prev_arrow.svg" alt="" class="prev">',
        nextArrow: '<img src="img/next_arrow.svg" alt="" class="next">'

    });

    $('.video_slider_resp').slick({
        dots: true,
        adaptiveHeght: false,
        infinite: false,
        variableWidth: true,

    });

    $('.slider_smoll').slick({
        dots: true,
        variableWidth: true,
        adaptiveHeght: true,
        responsive: [{
            breakpoint: 750,
            settings: {
                arrows: false,
            }
        }]
    });


    // Slide first screen


    //Menu-response 

    // navigatio hover background

    $('.header__container').mouseenter(function() {
        $('.bg_nav_hover').addClass('bg_nav_hover_active');
    });

    $('.header__container').mouseleave(function() {
        $('.bg_nav_hover').removeClass('bg_nav_hover_active');
    });

    // navigatio hover background

    $('.menu-burger__header').click(function() {
        $('.header__nav').toggleClass('open-menu');
    });


    // first_li PRODUCTS
    $('.active_li').click(function() {
        $('.menu_hidden').addClass('active');
    });

    $('.disable_li').click(function() {
        $(' .menu_hidden ').removeClass('active');
    });

    // first_li PRODUCTS


    // two_li Services
    $('.active_two').click(function() {
        $('.menu_hidden2').addClass('active');
    });

    $('.disable_li2').click(function() {
        $(' .menu_hidden2 ').removeClass('active');
    });

    // two_li Services



    // three_li Solutions

    $('.active_li3').click(function() {
        $(' #menu_hidden3 ').addClass('active');
    });

    $('.disable_li3').click(function() {
        $(' #menu_hidden3 ').removeClass('active');
    });


    // three_li Solutions


    // four_li About us

    $('.active_li4').click(function() {
        $(' #menu_hidden4 ').addClass('active');
    });

    $('.disable_li4').click(function() {
        $(' #menu_hidden4').removeClass('active');
    });


    // four_li About us

    // Burger animation

    $('.menu-burger__header').click(function() {
        $('.span_up').toggleClass('rotate_after');
    });

    $('.menu-burger__header').click(function() {
        $('.span_down').toggleClass('rotate_before');
    });

    $('.menu-burger__header').click(function() {
        $('.span_center').toggleClass('transparent');
    });

    // Burger animation


    // Smooth scrolling logo-footer
    $("#logo_footer, .logo, .click_return").click(function() {

        var elementClick = $(this).attr("href")

        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
    //Smooth scrolling logo-footer

    //Scroll up button. appearance
    function backToTop() {
        let button = $('.click_return');

        $(window).on('scroll', () => {
            if ($(this).scrollTop() >= 700) {
                button.fadeIn(600);
            } else button.fadeOut(600);
        })
    }
    backToTop();
    //Scroll up button. appearance


});


//Scroll up button. appearance

// show navigate beckground Responsive
window.onscroll = function bgNavShow() {


    var bg_nav = document.querySelector('.bg_nav_hover');

    if (window.pageYOffset > 50) {
        bg_nav.classList.add('bg_nav_show');
    } else {
        bg_nav.classList.remove('bg_nav_show');

    }
}

// show navigate beckground Responsive



// accordions footer

const accordeons_footer = document.querySelectorAll('.accordeon-nav-footer');

for (item of accordeons_footer) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    })
}

// accordions footer