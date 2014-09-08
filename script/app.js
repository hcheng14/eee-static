(function(w) {
    var NAV_SCROLL_MAX = 420;

    // Cheesy parallax scrolling
    w.onscroll = function() {

        var scroll = w.document.documentElement.scrollTop || w.document.body.scrollTop;
        console.log(scroll);

        // Nav fading
        var nav = w.document.getElementsByTagName('nav')[0];
        var alpha = Math.min(scroll, NAV_SCROLL_MAX) / NAV_SCROLL_MAX;
        nav.style.backgroundColor = 'rgba(32, 32, 41, ' + alpha + ')';

        // No parallax on mobiles
        if (w.innerWidth <= 1024)
            return;

        // Background color
        w.document.body.style.backgroundPositionY = '-' + (scroll / 2.25) + 'px';
    };

    // Mobile shit
    var $nav = $('nav');
    $('.nav-toggle a').click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $nav.toggleClass('open');
    });

    $nav.find('ul a').click(function(event) {
        $nav.removeClass('open');
    });

})(window);
