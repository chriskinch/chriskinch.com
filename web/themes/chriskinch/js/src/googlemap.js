var portfolioMap = (function() {

    var init = function(selector) {
        // Grab the element or kill it here if we can't find it.
        var element = document.querySelector(selector);
        if(!element) return;

        var GoogleMapsLoader = require('google-maps');
            GoogleMapsLoader.VERSION = '3.14';
            GoogleMapsLoader.LIBRARIES = ['places'];
            GoogleMapsLoader.KEY = 'AIzaSyBI5cYJFHCsdpNt3VVE5gqJDir94zt_qcw';

        GoogleMapsLoader.load(function(google) {
            var work = new google.maps.LatLng(51.521243, -0.13977);
            var map = new google.maps.Map(element, {
                center: work,
                zoom: 16,
                minZoom: 2,
                disableDefaultUI: true,
                zoomControl: true,
                scrollwheel: false,
                backgroundColor:'#222',
            });

            var place_request = {
                reference: 'CoQBdgAAAAU45juchY7wYQURE_I7hbmGYmsVyj0BpyU2Nf8pEqls5DDgdC7TpeTVXXKsji7NxkPHaJGZ2C_65ScgSGdbQEAEHeiPNwCYErY7uac0chiyZsyaYZ97h_e25RDDDxtTsFg3In4SJgAeJg2Zr4CkGIMR2jd0F5x64BcbSUhcwz1cEhB0qN5OyiWuv5Y8GEjTW19OGhQw4qWDSniHnnSlGl5VRmgruvYtNA'
            };

            var service = new google.maps.places.PlacesService(map);
            service.getDetails(place_request, function(place, status){
                console.log(this);
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    // To add the marker to the map, use the 'map' property
                    var marker = new google.maps.Marker({
                        position: place.geometry.location,
                        map: map
                    });
                    
                    var contentString = '<div class="map-marker-info">'+
                    '<h4 class="title">'+ place.name +'</h4>'+
                    '<p class="map-marker-meta">'+ place.vicinity +'</p>'+
                    '<p>Current workplace and second home of Chris Kinch. Resident since August 2008. Kind of a big deal at the local pub.</p>'+
                    '</div>';

                    infowindow.setContent(contentString);
                    infowindow.open(map, marker);

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, this);
                    });
                }  
            });

            var infowindow = new google.maps.InfoWindow({
                maxWidth: 370,
                disableAutoPan: true
            });
        });
    };

    return {
        init: init
    };

})();

module.exports = portfolioMap;