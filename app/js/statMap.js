var statsMap = '';
function initStatMap() {
    var mapOptions = {
        zoom: 3,
        center: new google.maps.LatLng(49.58, 36.15)
    };
    statsMap = new google.maps.Map(document.querySelector(".user__google-map"), mapOptions);
}
