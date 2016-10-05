var $ = require('jquery');

var snapNav = (function(){  
    var toggleMobileNav = function() {
        var top = $('body').offset().top - $(window).scrollTop();

        if(!$('body').hasClass('navigation-open')){
            $('body').css({top: top + 'px'});
        }else{
            var scroll = parseInt($('body').css('top'), 10);
            $('body').css('position', 'static');
            $('body').scrollTop(Math.abs(scroll)).css('position', '');
        }
        $('body').toggleClass('navigation-open');
    };

    var setSnapNav = function(){
        $(document).on('click', '#skip-link a, .navigation-open', function(event) {
            if($(event.target).is('.navigation-open')) {
                toggleMobileNav();
                return false;
            } else if($(event.target).is('#skip-link a')) {
                toggleMobileNav();
                return false;
            } else {
                event.stopPropagation();
                return;
            }
        });
    };

    return {
        setSnapNav: setSnapNav
    };
})();

module.exports = snapNav;