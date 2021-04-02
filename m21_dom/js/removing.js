$(function () {
  $("li").remove();

  // mini-challenge
  $('form').children().not('textarea, input:text, br').remove()

  // the same as remove, but you can store in a variable and it does not remove attached listeners
  let detachedItem = $('p').detach();
  $('form').append(detachedItem);

  // removes content from the selected box(div), but not the box(div) itself
  $('.green-box').first().empty()
});