//нахожу заготовку
let inputAdd = $('.box-info_add')[0];

//добавляю при клике в список
$('.measur-add-item').click(function () {
  $(inputAdd).clone(true).css({
    'position': 'relative',
    'z-index': '1'
  }).appendTo($(this).prev());
});

//удаление поля при клике
$('.box-info-close').click(function () {
  $(this).parent().css('display', 'none');
});

//клик на редактирование нахожу все инпуты
$('.box-info-edit').click(function () {


  if ($(this).parent().children('input').length > 0) {

    /* $(this).parent().children('.position-svg-trans').css('opacity', '1');
    $('.box-info_trans').mouseover(function () {
      $(this).children('.position-svg-trans').css('opacity', '0');
    })
    $('.box-info_trans').mouseout(function () {
      $(this).children('.position-svg-trans').css('opacity', '1');
    }) */
    $(this).parent().children('.position-svg-trans').css('margin-bottom', '0px');

    let inputInBox = $(this).parent().children('input');
    if (inputInBox[0].value.length > 0 && inputInBox[1].value.length > 0) {

      $(this).children().attr("xlink:href", "img/elements.svg#edit");

      $(this).parent().removeClass('box-info_add').addClass('box-info');
      inputInBox.each(function () {
        let classInput = $(this).attr('class');
        $(this).replaceWith($('<div>' + this.value + '</div>').addClass(classInput));
      });

    }

  } else {

    let boxText = $(this).parent().children('div .box__text');
    let boxNnumber = $(this).parent().children('div .box__number');

    $(this).children().attr("xlink:href", "img/elements.svg#check-mark");

    /* $('.transport__citys .box-info-close-trans').css('transform', 'translateX(15px)');
    $(this).parent().children('.position-svg-trans').css('opacity', '0'); */
    $(this).parent().children('.position-svg-trans').css('margin-bottom', '3px');

    $(this).parent().removeClass('box-info').addClass('box-info_add').css({
      'position': 'relative',
      'z-index': '1'
    });

    let classText = boxText.attr('class'),
      divText = boxText.text();
    //console.log(divText)

    boxText.replaceWith($(`<input>`).val(divText).addClass(classText));

    let classNnumber = boxNnumber.attr('class'),
      divNnumber = boxNnumber.text();
    boxNnumber.replaceWith($(`<input>`).val(divNnumber).addClass(classNnumber));
  }
});


$('.user__city-btn').click(function () {

  let classNnumber = $(this).prev().attr('class'),
    divNnumber = $(this).prev().html(),
    text = $(this).parent().children('input').val();

  if ($(this).parent().children('input').length > 0) {

    $(this).prev().replaceWith($('<div>' + text + '</div>').addClass(classNnumber));
  } else {
    $(this).prev().replaceWith($(`<input  style = "background: #000">`).val(divNnumber).addClass(classNnumber));
  }
})