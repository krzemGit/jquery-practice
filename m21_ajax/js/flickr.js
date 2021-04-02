$(function () {
  filckrUrl = 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

  $.getJSON(filckrUrl, {
    // options
    tags: "sun, beach",
    tagmode: "any",
    format: 'json'

  }).done(function (data) {
    // success
    console.log(data.items);

    // using .each() to display data
    $.each(data.items, function (index, item) {
      console.log(item);
      $("<img>").attr("src", item.media.m).appendTo('#flickr')

      // if any of the iterated items returns false, each loop breaks:
      if (index === 10) {
        return false
      }
    })

  }).fail(function (error) {
    console.log(error);
    alert('AJAX request failed')
  })
})