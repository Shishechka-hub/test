// SliderMain
export function sliderMain () {
    const slickMain = $(".sliderMain__slick_js");

	if (slickMain.length) {
		slickMain.slick({
			arrows: false,
			fade: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 9500,
			speed: 500,
			slidesToShow: 1,
			cssEase: 'linear',
			dots: true,
		});
    }
};
