$ = jQuery.noConflict();

$(function() {
    // program content tabs
    changeTabs('home-program-item__tabs-btn','home-program-item__tab');

    // program popup tabs
    changeTabs('package-tab','package-content-tab');

    // module popup tabs
    changeTabs('module-tab','module-content-tab');

    // reviews slider
    $('.home-reviews-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.popup-slider-reviews',
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false
                }
            }
        ]
    });

    // $('body').on('click', '.home-reviews-slide', function(){
    //     if ($(this).hasClass('slick-current')) {
    //         showPopup('#popup-reviews');
    //         setTimeout(function() {
    //             $('.popup-slider-reviews').slick('setPosition');
    //         }, 1000);
    //     }
    // });

    // popup reviews slider
    $('.popup-slider-reviews').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        centerPadding: 0,
        adaptiveHeight: true,
        asNavFor: '.home-reviews-slider'
    });

    // students slider
    $('.home-students-slider').slick({
        speed: 0,
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        asNavFor: '.home-students-slider-nav',
        customPaging : function(slider, i) {
            return String(i + 1).padStart(2, '0');
        },
    });

    // students video slider
    $('.home-students-video-slider').slick({
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        asNavFor: '.home-students-slider-nav',
    });

    // popup students slider
    $('.popup-slider-students').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        centerPadding: 0,
        adaptiveHeight: true,
        asNavFor: '.home-students-slider-nav'
    });

    // $('body').on('click', '.home-students-video-slide', function(){
    //     if ($(this).hasClass('slick-current')) {
    //         showPopup('#popup-students');
    //         setTimeout(function() {
    //             $('.popup-slider-students').slick('setPosition');
    //         }, 1000);
    //     }
    // });

    // faq toggle
    $('.home-faq-item').click(function (){
        $(this).toggleClass('home-faq-item--active').find('.home-faq-item__main').slideToggle(300);
    });
});

function selectProgramTab(number) {
    var $tab = $('.package-tab[data-item="' + number + '"]');
    var $contentTab = $('.package-content-tab[data-item="' + number + '"]');

    if (!$tab.hasClass('package-tab--active')) {
        $('.package-tab--active').removeClass('package-tab--active');
        $tab.addClass('package-tab--active');

        $('.package-content-tab--active').removeClass('package-content-tab--active');
        $contentTab.addClass('package-content-tab--active');
    }
}

function selectModuleTab(number) {
    var $tab = $('.module-tab[data-item="' + number + '"]');
    var $contentTab = $('.module-content-tab[data-item="' + number + '"]');

    if (!$tab.hasClass('module-tab--active')) {
        $('.module-tab--active').removeClass('module-tab--active');
        $tab.addClass('module-tab--active');

        $('.module-content-tab--active').removeClass('module-content-tab--active');
        $contentTab.addClass('module-content-tab--active');
    }
}
