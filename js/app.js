$(document).ready(function(){
$(document).foundation();
// $(window).on('resize', Foundation.lib_methods.throttle(function () {
//        $(document).foundation();
// }, 300));
});

// console.log('hahaha');

if(typeof window.getComputedStyle(document.body).backgroundBlendMode == 'undefined') {
    document.documentElement.className += "no-background-blend-mode";
}
