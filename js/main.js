$('a[href^="#"]').on('click', function () {
  var speed = 300;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({
    scrollTop: position
    }, speed, "swing");
    return false;
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