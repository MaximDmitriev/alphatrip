$('document').ready(function () {
    //=require initMap.js
    //=require statMap.js
    //=require addVisitedCity.js
    //=require addDot.js

    var map;
    var labels = [];
    initMap();
    google.maps.event.addDomListener(window, 'load', map);

    new addVisitedCity({
        name: 'Москва',
        color: 'green',
        map: map,
        latLng: new google.maps.LatLng(55.4507, 37.3656)
    });

    new addVisitedCity({
        name: 'Будапешт',
        color: 'red',
        map: map,
        latLng: new google.maps.LatLng(45.43861, 40.32667)
    });


    new addVisitedCity({
        name: 'Венеция',
        color: 'blue',
        map: map,
        latLng: new google.maps.LatLng(52.49801, 24.03991)
    });

    //=require ../elements/**/*.js
});