function adviceFunc() {

  $('.check-mark-advice').click(function () {
    let inputText = $(this).prev().val();

    if (inputText.length > 0) {
      $(this).prev().replaceWith($('<span>' + inputText + '</span>'));
      $(this).css({
        'display': 'none'
      })
    }
  });

  let inputAddAdvice = $('.advice__list-item_add')[0];

  //добавляю при клике в список
  $('.advice__list-add-item').click(function () {
    $(inputAddAdvice).clone(true).css({
      'position': 'relative',
      'z-index': '1'
    }).appendTo($(this).prev());
  });

}

adviceFunc();