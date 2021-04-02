$(function () {

  // The first slides element up and make it disappear (display:none), the latter slides it down and appear again
  $('.blue-box').slideUp(2000);
  $('.blue-box').slideDown(2000);

  $('.green-box').slideUp(0);
  $('.green-box').slideDown(2000);

  $('.red-box').slideToggle(2000);
  $('.red-box').slideToggle(2000);
})