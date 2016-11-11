// Theme JS dependencies via browserify/webpack
var labelhide = require("./src/labelhide");
var map = require("./src/googlemap");
var domready = require("domready");

// Theme dependancies via libraries.yml
var breakpoints = drupalSettings.breakpoints_settings.chriskinch;

// Init for contact form label hide/show on chnage
domready(function(){
	labelhide.init('.contact-form input[type="text"], .contact-form input[type="email"], .contact-form textarea');
});


// Only init Google Maps on narrow and above
enquire.register(breakpoints.narrow, {
	match : function() {
		map.init('.search-block-form');
	}
});

// Last.fm widget call
// var config = drupalSettings.lastfm_widget;
// $.each(config.services, function(key, val){
//     $(val.block).myLastFM(config.user, config.api_key, key, val.options);
// });

// Snap style navigation
var snapnav = require("./src/snapnav");
//////////////////////////////
// Mobile + Tablet navigation menu
//////////////////////////////
enquire.register(breakpoints.mobile_only, {
	match : function() {
		snapnav.setSnapNav();
	}
}).register(breakpoints.skinny_only, {
	match : function() {
		snapnav.setSnapNav();
	}
}).register(breakpoints.narrow_only, {
	match : function() {
		snapnav.setSnapNav();
	}
});