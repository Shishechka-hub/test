// searchHeader
export function searchHeader() {
    if($(".searchHeader_js").length) {
        $(".searchHeader_js").each(function(){
            if($(this).val().length > 0) {
                $(this).addClass("notEmpty");
            } else {
                $(this).removeClass("notEmpty");
            }
        });

        $(".searchHeader_js").change( function() {
            if($(this).val().length > 0) {
                $(this).addClass("notEmpty");
            } else {
                $(this).removeClass("notEmpty");
            }
        });
    };
}