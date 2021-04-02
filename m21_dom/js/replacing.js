$(function () {
  // with element directly
  $('li').first().replaceWith('<li>Replaced.</li>')

  // with callback
  $('li').last().replaceWith(() => '<li>Replaced.</li>')

  // one element MOVED to replace another
  $('p:first').replaceWith($('li:last'))

  // reverse syntax:
  $('<div class="green-box">New Green</div>').replaceAll('.blue-box, .red-box')
})