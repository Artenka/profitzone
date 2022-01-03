$(function() {
    // program content tabs
    changeTabs('home-program-item__tabs-btn','home-program-item__tab');

    // program popup tabs
    changeTabs('package-tab','package-content-tab');

    // module popup tabs
    changeTabs('module-tab','module-content-tab');

    // promo countdown
    $(".countdown-promo").countdown('2022/01/05', function (event) {
        var totalHours = event.offset.totalDays * 24 + event.offset.hours;
        $(this).html(event.strftime('<li>' + totalHours + '</li><li>%M</li><li>%S</li>'));
    }).on('finish.countdown', function (event) {
        console.log('promo offer finished');
    });

    // reviews slider
    $('.home-reviews-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        centerPadding: 0,
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

    // popup reviews slider
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

    // faq toggle
    $('.home-faq-item').click(function (){
        $(this).toggleClass('home-faq-item--active');
    });
});
