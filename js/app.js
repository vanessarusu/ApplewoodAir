$(document).foundation();


if(typeof window.getComputedStyle(document.body).backgroundBlendMode == 'undefined') {
    document.documentElement.className += "no-background-blend-mode";
}

jQuery( document ).ready(function( $ ) {
        $( '#my-slider' ).sliderPro({
        	width: '100%',
        	height: 597,
        	buttons: false,
        	thumbnailsContainerWidth: '100%',
        	thumbnailHeight: 50,
        	autoplay: true,
        	touchSwipe: true
        });
        $( '#testimonialSlider' ).sliderPro({
        	width: '100%',
        	height: 300,
        	buttons: false,
        	autoplay: false,
        	touchSwipe: true,
        	arrows: true
        });
    });