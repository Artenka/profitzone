$(function () {
    // smooth scroll on anchors
    $(document).on('click', '.link-smooth', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 10
        }, 1500);
    });

    //popup link
    $("body").click(function () {
        hidePopup();
    });
    $(".popup, .popup-link").click(function (e) {
        e.stopPropagation();
    });

    $('.popup__close').click(function () {
        hidePopup();
    });

    //phone flags
    $("input[type=tel]").intlTelInput({
        utilsScript       : 'js/utils.js',
        defaultCountry    : 'auto',
        separateDialCode  : false,
        nationalMode      : false,
        initialCountry    : 'auto',
        geoIpLookup       : function (callback) {
            $.get("https://ipinfo.io", function () {
            }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
            });
        },
        preferredCountries: ['ua', 'ru', 'by', 'kz']
    });
});

function showPopup(popupId) {
    $(popupId).fadeIn(400);
}
function hidePopup() {
    $('.popup-layout').fadeOut(400);
    $('.popup-video').find('iframe').remove();
}

function showVideoPopup(videoId) {
    showPopup('#popup-video');
    $('.popup-video .popup-video__video').html('').append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videoId + '?rel=0&amp&autoplay=1;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
}

function changeTabs(tabClass, contentClass) {
    $('.' + tabClass).click(function () {
        if (!$(this).hasClass(tabClass + '--active')) {
            $('.' + tabClass + '--active').removeClass(tabClass + '--active');
            $(this).addClass(tabClass + '--active');
            $('.' + contentClass + '--active').removeClass(contentClass + '--active');
            $('.' + contentClass + '[data-item=' + $(this).data("item") + ']').addClass(contentClass + '--active');
        }
    })
}