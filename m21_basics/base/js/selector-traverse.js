$(function () {
  // select all children on the first li element
  $('li:first').find('li').css('background-color', 'green')

  // .children() - all DIRECT children (can specify a tag in perentheses)
  // .parents() - all paretns
  // .parent() - first parent
  // .sibilings(':header') - all sibillings that are headers, so: header, h1, h2, etc... 
  // .prev() - previous item in the DOM
  // .next() - next item in the DOM
})