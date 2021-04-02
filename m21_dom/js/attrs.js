$(function () {
  // attr()
  let specialLink = $('a');
  console.log(specialLink.attr('href'));
  console.log(specialLink.attr('title'));
  specialLink.attr('href', 'https://youtube.com');

  // prop() - for reading boolean-only values in html elements (like checked in checkbox)
  let $checkbox = $('input[type="checkbox"]')
  console.log($checkbox.prop('checked'));

  // val() - gives the value of an html object, most likely input, useful in forms and listeners
  const inputs = $('input').val()
  console.log(inputs)

  // all these methods work for FIRST ELEMENT!
})