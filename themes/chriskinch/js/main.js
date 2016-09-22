require.config({
  paths: {
    enquire: '/sites/chriskinch.com/themes/chriskinch/js/lib/enquire.js/dist/enquire.min',
    savvior: '/sites/chriskinch.com/themes/chriskinch/js/lib/savvior/dist/savvior.min',
    googlemap: '/sites/chriskinch.com/themes/chriskinch/js/src/googlemap',
    snapnav: '/sites/chriskinch.com/themes/chriskinch/js/src/snapnav',
  }
});

// jQuery is already loaded by Drupal so we define it here so that
// it is available to modules later.
define('jquery', [], function($) {
  return jQuery;
});

// Drupal settings are also defined for later
define('drupal', [], function() {
  return Drupal;
});

// Googlemaps custom JS
require(["googlemap"]);

// Savvior for column stacking and staggering
require(["savvior", "jquery"], function(savvior, $){
  if ($('body').hasClass('front')) {
    savvior.init("#grid", {
      "screen and (max-width: 620px)": { columns: 1 },
      "screen and (min-width: 620px) and (max-width: 960px)": { columns: 2 },
      "screen and (min-width: 960px)": { columns: 3 },
    });
    $('body').addClass('savvior');
  }
});

// Last.fm widget call
require(["jquery", "drupal"], function($, Drupal){
  var config = Drupal.settings.lastfm_widget;
  $.each(config.services, function(key, val){
    $(val.block).myLastFM(config.user, config.api_key, key, val.options);
  });
});

// Snap style navigation
require(['snapnav']);