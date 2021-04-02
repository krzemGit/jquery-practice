$(function () {
  // filtering, can also take callback as an argument
  $('#list').children('li').filter(':even').css({ color: '#222' });
  $('li').filter(function (index) {
    // filter can also take a function as argument with index as a parmeter, matches all elements for which the condition yields true
    return index % 3 === 2;
  }).css({ backgroundColor: 'green' })

  // first and last
  $('li').first().css({ backgroundColor: 'yellow' })
  $('li').last().css({ backgroundColor: 'red' })

  // element with specific index in a list, can be minus to count from the end
  $('li').eq(4).css('color', 'red');
  $('li').eq(-2).css('color', 'yellow');

  // opposite to filter, and also can take callback for argument
  $('li').not(':even').css('text-decoration', 'underline') // will select all odd
})