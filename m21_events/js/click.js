$(function () {
  $('.red-box').click(function (e) {
    console.log('clicked');
    $(this).fadeTo(500, .5)
  })

  // this will invoke event automatically
  $('.red-box').click()
})