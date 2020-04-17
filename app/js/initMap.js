function initMap() {
    var mapOptions = {
        zoom: 4,
        minZoom: 4,
        maxZoom: 16,
        center: new google.maps.LatLng(49.58, 36.15)
    };
    map = new google.maps.Map(document.querySelector(".map"), mapOptions);
}