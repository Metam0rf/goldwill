$(document).ready(() => {
        $("a.arrow-down").click(function (event) {
            event.preventDefault();
            const elementClick = "#" + $(this).attr("href").split("#")[1];
            const destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 'slow');
            return false;
        });
    }
);

var last_known_scroll_position = 0;
var ticking = false;
var slide_slogan = document.querySelector(".slide-slogan");


function onScrollHandler(e, scroll_pos) {

    if(slide_slogan.)

}

window.addEventListener('scroll', function(e) {

    last_known_scroll_position = window.scrollY;

    if (!ticking) {

        window.requestAnimationFrame(function() {
            onScrollHandler(e, last_known_scroll_position);
            ticking = false;
            console.log(last_known_scroll_position);
        });

        ticking = true;

    }

});

