

$(document).ready(function(){
//Direction means to detect whether or not user is scrolling up or down.
// Fixed Navigation script.
	$('.js-section-features').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass('sticky');
		}else{
			$('nav').removeClass('sticky');
		}
	}, {
		offset:"60px;"
	});
	$('.js-wp-1').waypoint(function(direction){
		$('.js-wp-1').addClass('animated fadeIn');
	}, offset:"50%");

	/*Scroll on buttons*/
	$('.js-scroll-to-plans').click(function(){

		/* animates by scrolling to top of js plans with a transition period of 1 second.*/
		$('html, body').animate({scrollTop:$('.js-section-plans').offset().top}, 1000);

	});
	$('.js-scroll-to-features').click(function(){

		/* animates by scrolling to top of js plans with a transition period of 1 second.*/
		$('html, body').animate({scrollTop:$('.js-section-features').offset().top}, 1000);

	});


 	/* Navigation Smooth Scroll */
 	/* Credit to: https://css-tricks.com/smooth-scrolling-accessibility/ */
 	$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


});