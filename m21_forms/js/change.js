$(function () {
  $('#checkbox').change(function () {
    // .is checks the boolean prop value - alternative is .prop()
    let isChecked = $(this).is(':checked')

    // condition (.add() here is adding an existing element to a seletion, not creating new one) :
    if (isChecked) {
      $(this).add('label[for="checkbox"]').css('box-shadow', '0 0 4px #181')
    } else {
      $(this).add('label[for="checkbox"]').css('box-shadow', '0 0 4px #811')
    }
  })

  // check the selected value
  $('#selection').change(function () {
    let selectedOpt = $(this).find(':selected').text()
    alert(selectedOpt)
  })
})