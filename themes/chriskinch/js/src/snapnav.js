define(['jquery', 'enquire', 'drupal'], function($, enquire, Drupal) {

  var breakpoints = Drupal.settings.breakpoints;

  //////////////////////////////
  // Mobile + Tablet navigation menu
  //////////////////////////////
  enquire
  .register(breakpoints.default, {
    match : function() {
      setSnapNav();
    } 
  })
  .register(breakpoints.skinny_only, {
    match : function() {
      setSnapNav();
    }
  })
  .register(breakpoints.narrow_only, {
    match : function() {
      setSnapNav();
    }
  });


  function setSnapNav(){
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

  function toggleMobileNav() {
    var top = $('body').offset().top - $(window).scrollTop();

    if(!$('body').hasClass('navigation-open')){
      $('body').css({top: top + 'px'});
    }else{
      var scroll = parseInt($('body').css('top'), 10);
      $('body').css('position', 'static');
      $('body').scrollTop(Math.abs(scroll)).css('position', '');
    }

      $('body').toggleClass('navigation-open');
    }
  }


  return function () {};

});