$(document).ready(function() {

    // slider customise
    $('.slider_wrapper').slick({
        dots: true,
        asNavFor: ".slider_index_wrapper",
        infinite: false,
        fade: true,
        responsive: [{
            breakpoint: 750,
            settings: {
                fade: false
            }
        }]

    });

    // slider customise


    // slider_index customise

    $('.slider_index_wrapper').slick({
        arrows: false,
        asNavFor: ".slider_wrapper",
        infinite: false,
        fade: true,

    });
    // slider_index customise


    // navigatio hover background


    $('.header__container').mouseenter(function() {
        $('.bg_nav_hover').addClass('bg_nav_hover_active');
    });

    $('.header__container').mouseleave(function() {
        $('.bg_nav_hover').removeClass('bg_nav_hover_active');
    });

    // navigatio hover background



    //Menu-response 


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

    // input active


    // input active

    // Smooth scrolling
    $(".click_return, .logo_footer").click(function() {

        var elementClick = $(this).attr("href")

        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
    //Smooth scrolling end
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

// появление подложки меню в адаптиве
window.onscroll = function bgNavShow() {


    var hiddenNav = document.querySelector('.bg_nav_hover');

    if (window.pageYOffset > 50) {
        hiddenNav.classList.add('bg_nav_show');
    } else {
        hiddenNav.classList.remove('bg_nav_show');

    }
}
// появление подложки меню в адаптиве

//accordion 

const accordeons = document.querySelectorAll('.accordeon-item');

for (item of accordeons) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');

    })
}

//accordion 

// accordions footer

const accordeons_footer = document.querySelectorAll('.accordeon-nav-footer');

for (item of accordeons_footer) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    })
}

// accordions footer