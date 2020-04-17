function sliderVariabel() {
  $(".slider-child").ionRangeSlider({
    skin: 'nutrition-calc',
    min: 1000,
    max: 5000,
    step: 50,
    onChange: function (obj) { // callback, вызывается при каждом изменении состояния
      $('.alimentation__calories-text-num').html(obj.from_pretty);
    }
  });
  $(".slider").ionRangeSlider({
    skin: 'nutrition-calc',
    min: 1000,
    max: 5000,
    step: 50,
    onChange: function (obj) { // callback, вызывается при каждом изменении состояния
      $('.alimentation__calories-text_men').html(obj.from_pretty + ' <div class="alimentation__calories-text-measur">ккал/день</div>');
    }
  });
}
sliderVariabel();