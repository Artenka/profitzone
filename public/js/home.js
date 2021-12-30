$(function() {
    // program content tabs
    changeTabs('home-program-item__tabs-btn','home-program-item__tab');

    // reviews slider
    $('.home-reviews-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        centerPadding: 0,
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

    // students slider
    $('.home-students-slider').slick({
        speed: 0,
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.home-students-video-slider',
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
        asNavFor: '.home-students-slider',
    });

    // faq toggle
    $('.home-faq-item').click(function (){
        $(this).toggleClass('home-faq-item--active');
    });
});
