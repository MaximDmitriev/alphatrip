function travelOptions() {
  $('.travel-options__no-passport').hide();
  $('.travel-options__visa').hide();


  $('.travel-options__question-btn_yes').on("click", function () {
    $('.travel-options__visa').show();
    $('.travel-options__question').hide();
  });
  $('.travel-options__question-btn_no').on("click", function () {
    $('.travel-options__no-passport').show();
    $('.travel-options__question').hide();
  });
}

travelOptions();