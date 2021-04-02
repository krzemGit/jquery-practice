$(function () {
  // events on key down
  $('html').keydown(function (e) {
    if (e.which === 39) {
      $('.blue-box').css('margin-left', '+=10px')
    } else if (e.which === 37) {
      $('.blue-box').css('margin-left', '-=10px')
    }
  })
})