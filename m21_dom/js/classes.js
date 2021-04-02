$(function () {
  // standard
  $('a').addClass('fancy-link');
  $('p:first').addClass('large emphasize')

  // with function
  $('li li').addClass(function (index) {
    // $(this).addClass('item-' + index)
    return 'item-' + index
  })

  $('div').addClass(function (index, currentClass) {
    if (currentClass === 'blue-box') {
      return 'red-box'
    }
  })
})