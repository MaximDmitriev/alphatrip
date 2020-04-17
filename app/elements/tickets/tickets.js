const mySwiper = new Swiper($('[data-slider="tickets"]'), {
  speed: 400,
  slidesPerView: 1.14,
  navigation: {
    nextEl: '.tickets__slider-arrow',
  },
  breakpoints: {
    1055: {
      slidesPerView: 1
    }
  }
});

function tickets() {

  const tickets = $('.tickets');

  function addArrow(el) {
    const arrow = document.createElement('div');
    const h = $(el).outerHeight();
    $(arrow).addClass('tickets__line');
    $(arrow).css('height', `${h}px`);
    $(el).append(arrow);
  }

  function drawArrows() {
    if ($('.tickets__line').length) {
      $('.tickets__line').each((i, item) => $(item).remove());
    }

    $(tickets).each(function () {
      const row = $(this).find($('.tickets__row'));
      $(row).each(function (i, item) {
        if (!(i === $(row).length - 1)) {
          addArrow(item);
        }
      });
    });
  }

  drawArrows();

  $(window).resize(() => drawArrows());

  const tripPlanned = $('.tours__trip_planned'),
    tripDone = $('.tours__trip_done');

  function toogleCard(el) {
    $(el).each(function () {
      const upPart = $(this).find($('.tours__col-upper')),
        downPart = $(this).find($('.tours__col-down')),
        closeBtn = $(this).find($('.tickets__close')),
        total = $(this).find($('.tours__trip-total'));

      $(downPart).css('display', 'none');
      if (el === tripDone) {
        $(closeBtn).css('display', 'none');
      }

      $(this).click(function (e) {
        if (el === tripPlanned) {
          $(upPart).css('display', 'none');
        } else {
          $(closeBtn).css('display', 'block');
          $(total).css('opacity', 0);
        }

        $(downPart).css('display', 'block');
        drawArrows();
      });

      $(closeBtn).click(function (e) {
        e.stopPropagation();
        if (el === tripPlanned) {
          $(upPart).css('display', 'flex');
        } else {
          $(closeBtn).css('display', 'none');
          $(total).css('opacity', 1);
        }
        $(downPart).css('display', 'none');
      });
    });
  }

  toogleCard(tripPlanned);
  toogleCard(tripDone);
}

tickets();

function inputs() {
  const wraps = $('.tickets__booking');

  $(wraps).each(function () {
    const input = $(this).find('input');

    $(input).each(function (i, item) {
      $(item).keyup(function () {
        if (item.value.length > 1) {
          item.value = item.value.slice(-1);
        }
        if ((i !== input.length - 1) && item.value) {
          $(input[i + 1]).focus();
        }
        if ((i === input.length - 1) && item.value) {
          for (let i = 0; i < input.length - 1; i++) {
            if (!input[i].value) {
              $(input[i]).focus();
              break;
            }
          }
        }
      });
    });
  });
}

inputs();