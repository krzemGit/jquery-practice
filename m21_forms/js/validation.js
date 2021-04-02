$(function () {
  $('#form').submit(function (e) {
    e.preventDefault();
    const name = $('#name').val();
    const pass = $('#password').val();
    const msg = $('#message').val().trim();
    const check = $('#checkbox').is(':checked');

    validateNameField(name);
    validatePasswordField(pass);
    validateMsgField(msg);
    validateCheckboxField(check);
  })

  function validateNameField(name) {
    if (!isFieldValid(name, 'normal')) {
      $('#name-feedback').text("Please enter at least three characters")
    } else {
      $('#name-feedback').text('')
    }
  }

  function validatePasswordField(password) {
    if (!isFieldValid(password, 'normal')) {
      $('#password-feedback').text("Please enter at least three characters")
    } else {
      $('#password-feedback').text('')
    }
  }

  function validateMsgField(msg) {
    if (!isFieldValid(msg, 'long')) {
      $('#message-feedback').text("Please enter at least six characters")
    } else {
      $('#message-feedback').text('')
    }
  }

  function validateCheckboxField(checked) {
    if (!isFieldValid(checked, 'check')) {
      $('#checkbox-feedback').text("Please check the box")
    } else {
      $('#checkbox-feedback').text('')
    }
  }

  function isFieldValid(value, condition) {
    switch (condition) {
      case 'normal':
        if (value.length > 2) return true
      case 'long':
        if (value.length > 5) return true
      case 'check':
        return value
      default:
        return false
    }
  }

  // option for password check:
  // function isValidPassword(password) {
  //   return password.length >= 6 && /.*[0-9].*/.test(password);
  // }

})