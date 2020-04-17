var hotelGallery = new Kmodal('#hotelGallery');
var sightsGallery = new Kmodal('#sightsGallery');
var sightsGallery = new Kmodal('#instagramGallery');
var sightsGallery = new Kmodal('#instagram');
var sightsGallery = new Kmodal('#tours-trip-gallery');

new Swiper($('[data-slider="big"]'), {
    slidesPerView: 1,
    navigation: {
        prevEl: $('[data-nav="prev-slide"]'),
        nextEl: $('[data-nav="next-slide"]')
    },
    thumbs: {
        swiper: {
            el: $('[data-slider="thumbs"]'),
            slidesPerView: 5,
            spaceBetween: 10,
            breakpoints: {
                640: {
                    slidesPerView: 3
                }
            }
        },
        slideThumbActiveClass: 'gallery__active-slide'
    }
});
new Swiper($('[data-slider="sights-big"]'), {
    slidesPerView: 1,
    navigation: {
        prevEl: $('[data-nav="prev-slide"]'),
        nextEl: $('[data-nav="next-slide"]')
    },
    thumbs: {
        swiper: {
            el: $('[data-slider="sights-thumbs"]'),
            slidesPerView: 5,
            spaceBetween: 10,
            breakpoints: {
                640: {
                    slidesPerView: 3
                }
            }
        },
        slideThumbActiveClass: 'gallery__active-slide'
    }
});
new Swiper($('[data-slider="instagram-big"]'), {
    slidesPerView: 1,
    navigation: {
        prevEl: $('[data-nav="prev-slide"]'),
        nextEl: $('[data-nav="next-slide"]')
    },
    thumbs: {
        swiper: {
            el: $('[data-slider="instagram-thumbs"]'),
            slidesPerView: 5,
            spaceBetween: 10,
            breakpoints: {
                640: {
                    slidesPerView: 3
                }
            }
        },
        slideThumbActiveClass: 'gallery__active-slide'
    }
});

const swiperFeedback = new Swiper($('[data-slider="swiperFeedback"]'), {
    speed: 400,
    slidesPerView: 2,
    navigation: {
        prevEl: $('[data-nav="feedback-prev-slide"]'),
        nextEl: $('[data-nav="feedback-next-slide"]')
    },
    breakpoints: {
        992: {
            slidesPerView: 1
        }
    }
});
new Swiper($('[data-slider="tours-trip-gallery-big"]'), {
    slidesPerView: 1,
    navigation: {
        prevEl: $('[data-nav="prev-slide"]'),
        nextEl: $('[data-nav="next-slide"]')
    },
    thumbs: {
        swiper: {
            el: $('[data-slider="tours-trip-gallery-thumbs"]'),
            slidesPerView: 5,
            spaceBetween: 10,
            breakpoints: {
                640: {
                    slidesPerView: 3
                }
            }
        },
        slideThumbActiveClass: 'gallery__active-slide'
    }
});

$('.likes-svg').click(function () {
    $(this).css({
        'fill': '#4ac261'
    })
    $('.deslikes-svg').css({
        'fill': 'none'
    })
})
$('.deslikes-svg').click(function () {
    $(this).css({
        'fill': '#d53838'
    })
    $('.likes-svg').css({
        'fill': 'none'
    })
})