// ScrollTo
export function scrollTo() {
    $('.scrollTo_js').on('click', function() {
        var el = $(this).attr('href');
        $('html, body').animate({scrollTop: $(el).offset().top - 160}, 500);

        if(el == "#tabsCharacteristics_js") {
            $('#tabsCharacteristics_js').trigger('click');
        }
        
        return false;
     });
}


// ScrollTo
export function scrollToMobile() {
    $('.addressMobile_js').on('click', function() {
        document.querySelector(".header").classList.remove("header_menuOpen");
        document.querySelector("body").classList.remove("body_overflow");
        var el = $(this).attr('href');
        $('html, body').animate({scrollTop: $(el).offset().top - 160}, 500);

        if(el == "#tabsCharacteristics_js") {
            $('#tabsCharacteristics_js').trigger('click');
        }
        
        return false;
     });
}
