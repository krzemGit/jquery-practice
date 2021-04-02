$(function () {
  // delegating listener to childre with p tag (secong argument)
  $('#content').on('click', 'p', function () {
    $(this).css('color', 'red') // this will apply to p
  })

  // delegated event will also apply to added elements
  $('#content').append('<p>Appended paragraph</p>')
})