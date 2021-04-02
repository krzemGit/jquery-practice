$(function () {

  $('.red-box').fadeOut(1000, () => {
    $('.green-box').fadeOut(1000, () => {
      $('.blue-box').fadeOut(1000)
    })
  })

})