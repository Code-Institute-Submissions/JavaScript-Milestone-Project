function initMap() {    
        latLng = new google.maps.LatLng(1.373333, 32.290276)
        var mapOptions = {
            center: latLng,
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: latLng,
            visible: true
        });
        marker.setMap(map);
    
        var locations = [
            {lat: 0.347596, lng: 32.582520}
        ];
};    