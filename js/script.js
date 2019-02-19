function pathPrepare ($el) {
	var lineLength = $el[0].getTotalLength();
	$el.css("stroke-dasharray", lineLength);
	$el.css("stroke-dashoffset", lineLength);
}

var $synth = $("path#Synth");
var $face = $("path#Face");


pathPrepare ($synth);
pathPrepare ($face)

var controller = new ScrollMagic.Controller();

var tween = new TimelineMax()
  .add(TweenMax.to($synth, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}));

var scene = new ScrollMagic.Scene({triggerElement: ".project-image", duration: 800, tweenChanges: true})
	.setTween(tween)
	.addIndicators()
	.addTo(controller);
	
var tween2 = new TimelineMax()
  .add(TweenMax.to($face, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}));
  
var scene2 = new ScrollMagic.Scene({triggerElement: ".about-image", duration: 600, tweenChanges: true})
	.setTween(tween2)
	.addIndicators()
	.addTo(controller);
	
///

var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("slideshow-slide");

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }


            slides[slideIndex - 1].style.display = "block";

            setTimeout(showSlides, 3000); // Change image every 2 seconds 
        };
var audioContext;

function startUserMedia() {
    if(!audioContext){
      audioContext = new AudioContext;
    } 
}

Amplitude.init({
      "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
      },
      "songs": [
        {
          "name": "Soundscape for Desertet Rooms",
          "artist": "Asbjørn Elle",
          "album": "Untitled",
          "url": "/songs/soundscape-for-desertet-rooms.mp3",
          "cover_art_url": ""
        }
      ]
    });

    window.onkeydown = function(e) {
        return !(e.keyCode == 32);
    };

    /*
      Handles a click on the song played progress bar.
    */
    document.getElementById('song-played-progress').addEventListener('click', function( e ){
      var offset = this.getBoundingClientRect();
      var x = e.pageX - offset.left;

      Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
    });