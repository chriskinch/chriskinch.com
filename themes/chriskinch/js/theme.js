// Theme JS dependencies via browserify/webpack
var map = require("./src/googlemap");

// Theme dependancies via libraries.yml
var breakpoints = drupalSettings.breakpoints_settings.chriskinch;

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
console.log(snapnav);
//////////////////////////////
// Mobile + Tablet navigation menu
//////////////////////////////
enquire.register(breakpoints.default, {
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