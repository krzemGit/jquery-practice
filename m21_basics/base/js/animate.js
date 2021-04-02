$(function () {

  // colors will not work here!!!

  $('.blue-box').animate({
    'margin-left': '+=200px',
    'opacity': 0,
  }, 2000, 'linear')

  // css in js also works
  $('.blue-box').animate({
    marginLeft: '-=200px',
    opacity: 1,
    backgroundColor: '#fff', // this will not work - color
  }, 500)
})