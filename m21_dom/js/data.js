$(function () {

  let gallery = $('.gallery');
  let images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  // attach data to an object, first name, than data
  gallery.data('availableImages', images)
  console.log(gallery.data('availableImages'));

  // logging whole associated data (icludes also data-??? attributes from html-5)
  gallery.data('name', 'The Awsome Gallery');
  console.log(gallery.data());

  gallery.removeData('name')
  console.log(gallery.data());

  let firstPar = $("p:first");
  console.log(firstPar.data());
});