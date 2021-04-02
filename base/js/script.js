$(function() { // we used function to make it asynchroneous - start after all elements have been loaded.

// $('p:first').css('background-color','rgb(102, 102, 102)');
// $('#list').find('li').css('color', 'rgba(200, 100, 0, 0.9)') 
// $("#list").children("li").filter(":even").css('color', '#EB2229') 
// $("li li").filter(function(index) {
//   return index % 2 == 1;
// }).css('color', '#2583FF') 

// $("ul ul").prepend("<li>I'm gonna be the first sub-item</li>")  
// $("<h4>Lechu Krzemu</h4>").prependTo("#content");

// $(".red-box").after("<div class='red-box'>Another Red</div>");
// $(".blue-box").before($(".red-box")); // moving element

// $(".red-box, .blue-box").replaceWith("<div class='green-box'>New Green Box</div>");
// $("<div class='green-box'>Another Green Box</div>").replaceAll(".red-box, .blue-box"); 

// $("form").children().not("textarea, input:text, br").remove();

// $(".red-box, .blue-box, .green-box").empty();

// SLIDESHOW

$('div.dummy').removeClass("dummy").addClass("blue-box")

$("p").eq(1).text($("p").eq(1).text() + " This text has been added")

let redBox = $(".red-box")

redBox.click(function() {
  redBox.fadeTo(2000, 0.5)
});

//hover
$(".green-box").hover(function() {
  $(this).text("Hovered upon!");
});

//mouse leave and mouse enter
let blueBox = $(".blue-box")
blueBox.hover(function() {
	$(this).fadeTo(500, 0.2);
	},
	function() {
	$(this).fadeTo(500, 1);
  });

let galleryImage = $(".gallery").find("img");
let images = [
  "images/laptop-mobile_small.jpg",
  "images/laptop-on-table_small.jpg",
  "images/people-office-group-team_small.jpg"
];

var imageNo = 0;
// setInterval(function() {
//   imageNo = (imageNo + 1) % images.length;  // infinite loop of 1, 2, 0, 1, 2,...
//   galleryImage.fadeOut(function() {
//     $(this).attr("src", images[imageNo]);   // nesting these methods change and the fadeIn inside this function makes the (1) change and (2) fadeIn appear after the fadeOut
//     $(this).fadeIn();
//   });
// }, 4000);


// modularized carousel on click
function slideShow() {
  imageNo = (imageNo + 1) % images.length;
  galleryImage.fadeOut(2000, function() {
    $(this).attr("src", images[imageNo]).fadeIn(2000);
  });
}

galleryImage.on("click", slideShow);

// Delegated event on mouse enter

$("ul li ul").append("<li>Sub item appended</li>")
$("li").on("mouseenter", "li", function () {
  $(this).css("color", "orange")
})

// Passing data to event

$("#btn-click").click({
  name: "krzem",
  domain: "krzemGit.com"
}, function(event) {
  greetUser(event.data);
});

function greetUser(userdata) {
  username = userdata.name || "Anonymous";
  domain = userdata.domain || "unknown origin";
  alert(`Welcome back ${username} from ${domain}!`)
}

// Image gallery with lightbox display
  // variables and order in html
let galleryItems = $(".gallery2").find("img")
galleryItems.css("width", "33%").css("opacity", "0.7");

  // increase opacity on hover
galleryItems.hover(function() {
  $(this).stop().fadeTo(500, 1)},
  function() {
    $(this).stop().fadeTo(500, 0.7)
  })

  //increase to lightbox, turn on lightbox
galleryItems.click(function() {
  let source = $(this).attr("src")
  let image = $("<img>").attr("src", source).css("width", "100%")
  $(".lightbox").empty().append(image).fadeIn(2000);
});

  // turn off lightbox onclick
$(".lightbox").click(function() {
  $(this).stop().fadeOut(2000)
})


// keyDown events

$("html").keydown(function(event) {
  console.log(event.which);})

let ARROW_RIGHT = 39;
$("html").keydown(function(event) {
    if (event.which === ARROW_RIGHT){
      $(".blue-box").animate({marginLeft: "+=20px"}, 1000)
    }
    console.log(event.which);
})

// FORM VALIDATION events
// focus and blur

let inputFields = $("input:text, input:password, textarea");
console.log(inputFields)
inputFields.focus(function() {
  $(this).css("box-shadow", "0 0 4px #665")
})

inputFields.blur(function() {
  if ($(this).val().length <= 3) {
    $(this).css("box-shadow", "0 0 4px red")
  }
  else {
  $(this).css("box-shadow", "none")}
});

// on change

$("select").change(function() {
  let selection = $(this).find(":selected").text();
  alert(`${selection} was chosen!`)
});

});