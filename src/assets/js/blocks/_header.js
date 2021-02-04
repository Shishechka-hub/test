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

    $(document).on('click', function(event){
		if (!$(event.target).closest(".header__toggleMobile, .header__menu").length) {
            $(".header").removeClass("header_menuOpen");
            $("body").removeClass("body_overflow");
            $(".dropdownHeader").removeClass("dropdownHeader_active");
            $(".dropdownHeader__sublevel").removeClass("dropdownHeader__sublevel_active");
        } 
    });
    
    if ($(window).width() < '960') {
        $(window).on('load', windowSize960);
    }

    function windowSize960(){
        $(".linkMobile_js").on('click', function(e){
            e.preventDefault();
            $(this).siblings(".dropdownHeader").addClass("dropdownHeader_active");
        });

        $(".prevMobileMenu_js").on('click', function(){
            $(this).parent(".dropdownHeader").removeClass("dropdownHeader_active");
        });

        $(".linkDownMobile_js").on('click', function(){
            $(this).siblings(".dropdownHeader__sublevel").addClass("dropdownHeader__sublevel_active");
        });

        $(".prevMobilePrev_js").on('click', function(){
            $(this).parent(".dropdownHeader__sublevel").removeClass("dropdownHeader__sublevel_active");
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