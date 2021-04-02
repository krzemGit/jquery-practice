$(function () {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load

  /*
  $(".red-box").fadeOut(2000);
  $(".green-box").fadeOut(2000);
  // Poczeka na skończenie jednej animacji, zanim zacznie drugą.
  $(".green-box").fadeIn(1000);
  */

  $(".red-box").fadeTo(2000, .6);
  $(".green-box").fadeTo(2000, .4);
  $(".blue-box").fadeTo(2000, .2);

  $(".blue-box").fadeToggle();
  $(".blue-box").fadeToggle();
});