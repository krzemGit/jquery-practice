$(function () {
  $('p, h2').css("color", "grey");
  $('p:first').css('color', 'green');
  $('li:last').css('color', 'red');
  // can use also with an object
  $('li:even').css({ textDecoration: 'underline' });
  $('input:text').css({ backgroundColor: 'rgba(180, 180, 60, .5)' })
})