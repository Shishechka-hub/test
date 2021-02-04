//📁 /node_modules/  jquery 3.5.1
import $ from 'jquery';
global.jQuery = global.$ = $;

//📁 /node_modules/  slick 1.8.1
import 'slick-carousel';

//📁 /assets/js/blocks  _header.js
import {toggleHeader, searchHeader} from './blocks/_header.js';

//📁 /assets/js/blocks  _sliders.js
import {sliderMain} from './blocks/_sliders.js';

//📁 /assets/js/blocks  _scrollTo.js
import {scrollTo, scrollToMobile} from './blocks/_scrollTo.js';

//📁 /assets/js/blocks  _map.js
import {map} from './blocks/_map.js';

document.addEventListener("DOMContentLoaded", function(){
    // mobile menu
    toggleHeader();
    // val search input
    searchHeader();

    // slick slider main 
    sliderMain();

    // scrollTo
    scrollTo();

    // scrollToMobile
    scrollToMobile();

    // map
    map();

});