$(function () {

  let galleryImage = $('.gallery').find('img').first();
  let images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ]

  let i = 0;

  setInterval(() => {
    i = (i + 1) % images.length;
    galleryImage.fadeTo(500, 0, () => {
      // callback required to wait until fadeOut finishes
      galleryImage.attr('src', images[i])
      galleryImage.fadeTo(500, 1)
    })
  }, 3000)

})