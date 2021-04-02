$(function () {
  let inputs = $("input:text, input:password, textarea");

  inputs.focus(function () {
    $(this).css('box-shadow', "0 0 4px #777")
  })

  inputs.blur(function (e) {
    console.log(e.target.value.length);
    if (e.target.value.length === 0) {
      $(this).css('box-shadow', "none")
    } else if (e.target.value.length <= 3) {
      $(this).css('box-shadow', "0 0 4px red")
    } else {
      $(this).css('box-shadow', "0 0 4px green")
    }

  })
})