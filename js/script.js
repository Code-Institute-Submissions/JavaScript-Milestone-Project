function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: {lat: 1.373333, lng: 32.290276}
        });
        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var markers = locations.map(function(location, i) {
            return new google.map.Marker({
                position,
                label: labels[i % labels.length]
            });
        });

        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

        var locations = [
            {lat: 0.347596, lng: 32.582520}
        ];    
    
};    