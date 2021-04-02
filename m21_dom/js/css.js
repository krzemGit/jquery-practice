$(function () {
  // works with relative values
  $('.red-box').css('width', '+=20px')
  const redBox = $('.red-box')
  console.log(redBox.css('width'));
  console.log(redBox.width());


  // can check multiple value using array
  const properties = $('.red-box').css(['font-size', 'width', 'border-color'])
  console.log(properties);
  console.log(properties['font-size']);

  // you can also use the function inside
  $('.blue-box').css('width', () => {
    // some logic or calculations
    return '+=100px'
  })
})