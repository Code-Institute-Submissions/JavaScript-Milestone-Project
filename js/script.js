function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: {lat: 1.373333, lng: 32.290276}
        });
        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var locations = [
            {lat: 0.347596, lng: 32.582520}
        ];

        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    
};    