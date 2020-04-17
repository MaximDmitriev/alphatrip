var sightsSlider = new Swiper($('[data-slider="sights-slider"]'), {
  slidesPerView: 4,
  setWrapperSize: true,
  spaceBetween: 15,
  navigation: {
    prevEl: '.sights-slider-btn_left',
    nextEl: '.sights-slider-btn_right',
    disabledClass: "activ"
  },


  breakpoints: {
    // when window width is <= 320px
    768: {
      slidesPerView: 1,
    },
    // when window width is <= 480px
    1054: {
      slidesPerView: 2,
    },
    // when window width is <= 640px
    1200: {
      slidesPerView: 3,
    }
  }
})