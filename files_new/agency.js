/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
function getNavbarOffset() {
    var navbarHeight = $('.navbar-fixed-top').outerHeight() || 0;

    return navbarHeight + 12;
}

function syncScrollOffset() {
    document.documentElement.style.setProperty('--section-scroll-offset', getNavbarOffset() + 'px');
}

$(function() {
    syncScrollOffset();

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var targetTop = $($anchor.attr('href')).offset().top - getNavbarOffset();

        $('html, body').stop().animate({
            scrollTop: Math.max(targetTop, 0)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $(window).on('resize', syncScrollOffset);
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

