var $ = require('jquery');

var snapNav = (function(){
    var toggleMobileNav = function() {
        var top = $('body').offset().top - $(window).scrollTop();
        $('.region-primary-menu').css('top', Math.abs(top));
        $('body').toggleClass('navigation-open');
    };

    var setSnapNav = function(){
        if(this.isSet){ // If this init has been run before exit.
            return;
        }

        $(document).on('click', '.skip-link, .layout-container', function(event) {
            var target = $(event.target);
            if(target.is('.skip-link') || target.is('.layout-container')) {
                toggleMobileNav();
                return false;
            } else {
                event.stopPropagation();
                return;
            }
        });

        this.isSet = true;
    };

    return {
        setSnapNav: setSnapNav
    };
})();

module.exports = snapNav;