// .html(), .text()
$(function () {

  const firstPar = $('p:first');
  console.log(firstPar.html());
  console.log(firstPar.text());
  firstPar.text('This is a new text.')
  firstPar.text(firstPar.text() + ' This is an appended text')

})