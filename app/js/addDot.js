addDot.prototype = new google.maps.OverlayView();

function addDot(options) {
    var myoptions = {
        map: '',
        latLng: ''
    };
    this.options = $.extend(myoptions, options);
    this.setMap(this.options.map);
}

addDot.prototype.draw = function () {
    var div = this.div_,
      point = this.getProjection().fromLatLngToDivPixel(this.options.latLng);
    if (!div) {
        div = this.div_ = document.createElement('div');
        $(div).css({
            position: 'absolute',
            width: 12,
            height: 12,
            'border-radius': 10,
            background: '#d43535'
        }).addClass('asdasdasd');
        var panes = this.getPanes();
        $(div).appendTo(panes.overlayImage);
    }
    if (point) {
        $(div).css({
            left: point.x - 5,
            top: point.y - 7
        });
    }
};

addDot.prototype.onRemove = function () {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
};
