$(function () {
  $('form').submit(function (e) {
    e.preventDefault()
    let textarea = $('#message');
    console.log(textarea.val().trim());
    if (textarea.val().trim() == '') {
      textarea.css('box-shadow', '0 0 4px #811');
    } else {
      textarea.css('box-shadow', '0 0 4px #181');
      alert('Message sent!')
    }
  })
})