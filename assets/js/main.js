$('.js-fadein').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('js-fadein-show');
    }
  },

  offset: '100%',
});


$('.js-fadein-left').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },

  offset: '100%',
});

$('.js-fadein-up').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element)
        .addClass('animate__fadeInUp');
    }
  },

  offset: '50%',
});

$('.js-fadein-right').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element)
        .addClass('animate__fadeInRight');
    }
  },

  offset: '50%',
});