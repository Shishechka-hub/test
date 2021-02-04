// const body
export const body = document.querySelector("body");

// ToggleHeader
export function toggleHeader() {
    if(document.querySelector(".toggleHeader_js")) {
        const toggle = document.querySelector(".toggleHeader_js");
        const header = document.querySelector(".header");

        toggle.addEventListener("click", () => {
            header.classList.toggle("header_menuOpen");
            body.classList.toggle("body_overflow");
        });
    }
}

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