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

// Add some classes to body for CSS hooks

// Get browser
$.each($.browser, function(i) {
    $('body').addClass(i);
    return false;  
});


// Get OS
var os = [
    'iphone',
    'ipad',
    'windows',
    'mac',
    'linux'
];

var match = navigator.appVersion.toLowerCase().match(new RegExp(os.join('|')));
if (match) {
    $('body').addClass(match[0]);
};