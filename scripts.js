var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  imagesLoaded: true,
  pageDots: false,
  selectedAttraction: 1,
  friction: 1,
  draggable: false
});

var el = document.getElementById('play');
el.addEventListener('click', VR.togglePlay());

$( "#close" ).on( "click", function() {
  $("#nav").hide();
});

$( "#menu" ).on( "click", function() {
  $("#nav").show();
});

if ($(window).width() < 900) {
   
   $( "#nav a" ).on( "click", function() {
	 $("#nav").hide();
   });
   
}