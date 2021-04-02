$(function () {

  // CHILD
  // Add element at the end
  $('ul ul:first').append('<li>This is the last sub-element of the list</li>')

  // the same but reverse sytntax
  $('<li>This is the last sub-element of each sub-list</li>').appendTo('ul ul')

  // Add element at the start
  $('ul ul:first').prepend('<li>This is the last sub-element of the list</li>')

  // and reverse syntax
  $('<li>This is the last sub-element of each sub-list</li>').prependTo('ul ul')


  // SYBILINGS
  $(".blue-box").after('<div class="blue-box">Blue Appended</div>')

  $(".green-box").before('<div class="green-box">Green Prepended</div>')

  $(".red-box").before(() => {
    return '<div class="red-box">Red Prepended (in func)</div>'
  })

  // There are also .afterTo and .beforeTo elements 


  // MOVING SYBILINGS
  $(".green-box").first().before($('.blue-box')) // moved all blue boxes before the first green box

})