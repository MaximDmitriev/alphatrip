function user() {
    const btn = $('.user__family-btn'),
        input = $('.user__family-input');

    $(btn).click(() => {
        $(btn).css('display', 'none');
        $(input).css('display', 'block');
    });

    let stroke = 477;

    $('.user__avatar-svg').each(function () {
        let percent = $(this).attr('data-percent'),
            progress = $('.user__progress'),
            newStroke = stroke * (percent / 100),
            $this = $(this);
        setTimeout(function () {
            $('.user__avatar-border', $this).css('stroke-dasharray', newStroke + ' ' + stroke);
            $(progress).css('width', `${percent}%`);
        }, 500);
    });

}

function stats() {
    const statistics = $('.user__statistics'),
        mapBox = $('.user__map'),
        count = $('.user__stats-graph').attr('data-count'),
        statsColumn = $('.user__stats-graph-column'),
        closeBtn = $('.user__stats-box-close'),
        showBtn = $('.user__show-stats-box');
    initStatMap();
    new addDot({
        map: statsMap,
        latLng: new google.maps.LatLng(55.4507, 37.3656)
    });
    new addDot({
        map: statsMap,
        latLng: new google.maps.LatLng(45.4507, 27.3656)
    });
    new addDot({
        map: statsMap,
        latLng: new google.maps.LatLng(38.4507, 57.3656)
    });
    new addDot({
        map: statsMap,
        latLng: new google.maps.LatLng(15.4507, 94.3656)
    });
    new addDot({
        map: statsMap,
        latLng: new google.maps.LatLng(15.4507, 17.3656)
    });
    new addDot({
        map: statsMap,
        latLng: new google.maps.LatLng(48.4507, 37.3656)
    });
    new addDot({
        map: statsMap,
        latLng: new google.maps.LatLng(58.4507, 7.3656)
    });
    new google.maps.Polyline({
        path: [{
                lat: 55.4507,
                lng: 37.3656
            },
            {
                lat: 45.4507,
                lng: 27.3656
            },
            {
                lat: 38.4507,
                lng: 57.3656
            }
        ],
        geodesic: true,
        strokeColor: '#d43535',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(statsMap);
    new google.maps.Polyline({
        path: [{
                lat: 15.4507,
                lng: 94.3656
            },
            {
                lat: 15.4507,
                lng: 17.3656
            },
            {
                lat: 48.4507,
                lng: 37.3656
            },
            {
                lat: 58.4507,
                lng: 7.3656
            }
        ],
        geodesic: true,
        strokeColor: '#d43535',
        strokeOpacity: 1.0,
        strokeWeight: 2
    }).setMap(statsMap);

    $(statistics).click(() => {
        const mapHeight = $(window).outerHeight();
        if (mapBox.css('max-height') !== '0px') {
            mapBox.css('max-height', 0);
        } else {
            mapBox.css('max-height', mapHeight);
        }
        $('.user__show-text').toggleClass('user__show-text_hidden');
    });

    statsColumn.each(function () {
        let columnCount = $(this).attr('data-count'),
            percent = columnCount * 100 / count;
        $('.user__stats-graph-bar-progress', $(this)).css('height', percent + '%');
    });

    closeBtn.click(() => {
        $('.user__stats-box').addClass('user__stats-box_hidden');
        $('.user__show-stats-box').addClass('user__show-stats-box_visible');
    });
    showBtn.click(() => {
        $('.user__stats-box').removeClass('user__stats-box_hidden');
        $('.user__show-stats-box').removeClass('user__show-stats-box_visible');
    });
}

user();
stats();

let copy = new ClipboardJS('.user__referral-info-btn');

let appendItem = $('.user__append-item'),
    familyIcon = $('.user__family-icon'),
    appendIcon = $('.more'),
    familyText = $('.user__family-text');

$(familyIcon).on('click', 'svg.more', function () {
    $(this).remove();

    numberOfPeople();

    if ($(familyIcon).children('.icon-man-icon').length < 4) {
        $('.user__append-item:eq(0)').css({
            'opacity': '1',
            'z-index': '1'
        })
    }
    if ($(familyIcon).children('.icon-girl').length < 4) {
        $('.user__append-item:eq(2)').css({
            'opacity': '1',
            'z-index': '1'
        })
    }
    if ($(familyIcon).children('.icon-childe').length < 4) {
        $('.user__append-item:eq(1)').css({
            'opacity': '1',
            'z-index': '1'
        })
    }
});


$(appendItem).click(function () {
    let childe = $(this).children('.append-icon');
    $(childe).clone(true).addClass('more').appendTo(familyIcon);

    if ($(familyIcon).children('.icon-man-icon').length == 4) {
        $('.user__append-item:eq(0)').css({
            'opacity': '0',
            'z-index': '-1'
        })
    }
    if ($(familyIcon).children('.icon-girl').length == 4) {
        $('.user__append-item:eq(2)').css({
            'opacity': '0',
            'z-index': '-1'
        })
    }
    if ($(familyIcon).children('.icon-childe').length == 4) {
        $('.user__append-item:eq(1)').css({
            'opacity': '0',
            'z-index': '-1'
        })
    }

    numberOfPeople();
})


function numberOfPeople() {
    console.log($(familyIcon).children().length);

    if ($(familyIcon).children().length == 2 && $(familyIcon).children('.icon-childe').length == 0) {
        $(familyText).text('вдвоем')
    } else if ($(familyIcon).children('.icon-childe').length >= 1 && $(familyIcon).children('.icon-girl').length == 1 && $(familyIcon).children('.icon-man-icon').length == 1 || $(familyIcon).children('.icon-childe').length >= 1 && $(familyIcon).children('.icon-girl').length == 1 && $(familyIcon).children('.icon-man-icon').length == 0 || $(familyIcon).children('.icon-childe').length >= 1 && $(familyIcon).children('.icon-man-icon').length == 1 && $(familyIcon).children('.icon-girl').length == 0) {
        $(familyText).text('семья')
    } else if ($(familyIcon).children().length == 1) {
        $(familyText).text('один')
    } else if ($(familyIcon).children().length == 0) {
        $(familyText).text('ноль')
    } else if ($(familyIcon).children('.icon-childe').length == 1 && $(familyIcon).children('.icon-girl').length == 0 && $(familyIcon).children('.icon-man-icon').length == 0) {
        $(familyText).text('ребенок')
    } else if ($(familyIcon).children('.icon-childe').length > 1 && $(familyIcon).children('.icon-girl').length == 0 && $(familyIcon).children('.icon-man-icon').length == 0) {
        $(familyText).text('дети')
    } else {
        $(familyText).text('компания')
    }
}
/* 
function numberOfPeople() {
    if ($(familyIcon).children().length === 2) {
        $(familyText).text('вдвоем')
    } else if ($(familyIcon).children('.icon-childe').length >= 1 && $(familyIcon).children('.icon-girl').length == 1 && $(familyIcon).children('.icon-man-icon').length == 1) {
        $(familyText).text('семья')
    } else if ($(familyIcon).children().length == 1 && $(familyIcon).children('.icon-childe').length == 0) {
        $(familyText).text('один')
    } else if ($(familyIcon).children('.icon-childe').length >= 1 && $(familyIcon).children('').length >= 3) {
        $(familyText).text('компания')
    } else if ($(familyIcon).children('.icon-childe').length >= 1 && $(familyIcon).children('.icon-girl').length == 0 && $(familyIcon).children('.icon-man-icon').length == 0) {
        $(familyText).text('ребенок')
    } else if ($(familyIcon).children().length == 0) {
        $(familyText).text('ноль')
    }
} */