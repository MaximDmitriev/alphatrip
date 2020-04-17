function header() {
  const menuLink = $('.header__options-item'),
        dropdown = $('.header__options-dropdown'),
        item = $('.header__dropdown-item');
        
  $(menuLink).click(function() {
    $(dropdown).removeClass('header__options-dropdown_show');
    $(this).find(dropdown).addClass('header__options-dropdown_show');
  });

  $(item).click(function(event) {
    event.stopPropagation();
    $(dropdown).removeClass('header__options-dropdown_show');
  });
  $(document).click(function(event) {
    if (!$('.header__options-item').is(event.target) && !$('.header__options-item').has(event.target).length) {
        $(dropdown).removeClass('header__options-dropdown_show');
    }
  });
}

header();

