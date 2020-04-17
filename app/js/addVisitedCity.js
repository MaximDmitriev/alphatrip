addVisitedCity.prototype = new google.maps.OverlayView();

function addVisitedCity(options) {
    var myoptions = {
        name: 'Не указан город',
        color: 'green',
        map: '',
        latLng: ''
    };
    this.options = $.extend(myoptions, options);
    this.setMap(this.options.map);
}

addVisitedCity.prototype.draw = function () {
    var content = $('.map-visited-city_empty').clone(),
      div = this.div_,
      point = this.getProjection().fromLatLngToDivPixel(this.options.latLng);
    $('.map-visited-city__name', content).text(this.options.name);
    if (!div) {
        div = this.div_ = document.createElement('div');
        $(div)
          .html($(content).html())
          .addClass('map-visited-city '+this.options.color);
        var panes = this.getPanes();
        $(div).appendTo(panes.overlayImage);
    }

    if (point) {
        $(div).css({
            left: point.x - 83.5,
            top: point.y - 55
        });
    }
};

addVisitedCity.prototype.onRemove = function () {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
};
