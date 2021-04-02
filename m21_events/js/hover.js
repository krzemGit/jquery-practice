$(function () {
  $('.blue-box').hover(function () {
    $(this).text('I was hovered')
  })

  // hover(mouseIn(), mouseOut())
  $('.green-box').hover(function () {
    $(this).stop().fadeTo(500, .5)
  }, function () {
    $(this).stop().fadeTo(500, 1)
  })

  // for separation: .mouseeenter() and .mouseleave()
  $('.red-box').mouseenter(function () {
    console.log('entered');
  })

  $('.red-box').mouseleave(function () {
    console.log('left');
  })
})