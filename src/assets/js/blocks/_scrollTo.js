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

