function tours() {
  const route = $('.tours__trip-route'),
    //trip = $('.tours__trip'),
    trip = $('.tours__col-upper'),
    icon = $('.tours__trip-icon'),
    wrap = $('.tours__trip-checkpoint-wrap'),
    arrow = $('.tours__trip-next'),
    end = $('.tours__trip-total'),
    ticketСlose = $('.tickets__close'),
    tripGallery = $('.tours__trip-checkpoint-gallery'),
    tripIcon = $('.tours__trip-icon');
  let check = false;

  $(trip).click(function () {
    $(this).parent('.tours__trip_castom').addClass('tours__trip_activ');
  });

  $(tripGallery).hide();

  //if ($(window).width() > 1054) {

  $('.tours__trip_done').click(function () {
    if ($(tripGallery).css('display') == 'none' && $(window).width() > 1054) {
      $(tripGallery).show();
      $('[data-role="show-photo"]')[0].style.background = '#eeeeee';
    }
  })
  $(ticketСlose).click(function () {
    $(this).closest(".tours__trip_castom").removeClass('tours__trip_activ');
    $(tripGallery).hide();
    $('[data-role="show-photo"]').each(function () {
      this.style.background = '#fff';
    })
  })
  $('[data-role="show-photo"]').click(function (e) {
    if ($(tripGallery).css('display') !== 'none' && $(window).width() > 1054) {
      e.stopPropagation();

      $('[data-role="show-photo"]').each(function () {
        $(this).css('background', '#fff');
      })
      this.style.background = '#eeeeee';
    }
  })

  // }




  function addLine(el, count) {
    const lineWrap = document.createElement('div'),
      lineBegin = document.createElement('div'),
      lineEnd = document.createElement('div');

    $(lineWrap).addClass('tours__trip-line');
    $(lineBegin).addClass('tours__trip-line-begin');
    $(lineEnd).addClass('tours__trip-line-end');

    lineWrap.append(lineBegin);
    lineWrap.append(lineEnd);
    $(el).parent().append(lineWrap);

    const top = parseInt($(lineWrap).css('top').slice(0, -2));
    let newTop = top + $(wrap).outerHeight() * count + 'px';
    $(lineWrap).css('top', newTop);
  }

  function addPseudo(el, check) {
    const circle = document.createElement('div'),
      arrow = document.createElement('div');

    $(circle).addClass('tours__vertical-circle');
    $(arrow).addClass('tours__vertical-arrow');

    if (check) {
      $(el).prepend(arrow);
    } else {
      $(el).append(circle);
      $(el).append(arrow);
    }
  }

  function renderHor() {
    let totalWidth = $(trip).width() - $(icon).outerWidth() - $(end).outerWidth() - 38;

    $(route).each(function () {
      const elements = $(this).find(wrap);
      let elWitdh = 0,
        count = 0;

      elements.each(function (i) {
        elWitdh += $(this).outerWidth();

        if (elWitdh > totalWidth) {
          elWitdh = 0;
          elWitdh += $(this).outerWidth();
          $(elements[i - 1]).find(arrow).css('opacity', 0);
          addLine(this, count);
          count++;
        }
      });
    });
  }

  function renderVert() {
    $(tripIcon).addClass('tours__big-icon');

    $(arrow).each((i, item) => $(item).css('opacity', 0));
    $(route).each(function (i, item) {
      const wraps = $(item).find(wrap);
      for (i = 1; i < wraps.length; i++) {
        i < wraps.length - 1 ? check = false : check = true;
        addPseudo(wraps[i], check);
      }
    });
  }

  function clear() {
    const lines = $('.tours__trip-line'),
      circles = $('.tours__vertical-circle'),
      arrows = $('.tours__vertical-arrow');

    $(tripIcon).removeClass('tours__big-icon');

    if ($(lines).length) {
      $(lines).each((i, item) => $(item).remove());
    }
    if ($(circles).length) {
      $(circles).each((i, item) => $(item).remove());
    }
    if ($(arrows).length) {
      $(arrows).each((i, item) => $(item).remove());
    }

    $(arrow).each((i, item) => $(item).css('opacity', 1));
  }

  $(window).resize(() => {
    clear();
    $('body').outerWidth() > 509 ? renderHor() : renderVert();
  });

  if ($('body').outerWidth() > 509) {
    renderHor();
  } else {
    renderVert();
  }
  const close = $('.tickets__close');
  $(close).click(() => {
    clear();
    $('body').outerWidth() > 509 ? renderHor() : renderVert();
  });
}

tours();

let tripLink = $('.tours__info-trip-link');
$(tripLink).click(function (event) {
  event.stopPropagation();
  new ClipboardJS('.btn-link');
});