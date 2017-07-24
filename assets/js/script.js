$(document).ready(function(){
	//alert('hi');


 $('.js-nav-icon').click(function() {
        $('.js-main-nav').slideToggle(200);

        var icon = $('.js-nav-icon i');
        if(icon.hasClass('ion-navicon-round')){
        	icon.addClass('ion-close-round');
        	icon.removeClass('ion-navicon-round');
        }else{
        	icon.addClass('ion-navicon-round');
        	icon.removeClass('ion-close-round');
        }
    });


	$('.js-section-features').waypoint(function(direction){

		if(direction == "down"){
			$('nav').addClass('sticky');
			
		}else{
			$('nav').removeClass('sticky');
		}
	}, {offset:'60px'});


	//Animations
$('.js-wp-1').waypoint(function(direction){

	$('.js-wp-1').addClass('animated fadeIn');
}, {offset:'60%'});


$('.js-wp-2').waypoint(function(direction){
	
	$('.js-wp-2').addClass('animated fadeInUp');
}, {offset:'60%'});

$('.js-wp-3').waypoint(function(direction){


	$('.js-wp-3').addClass('animated fadeIn');
}, {offset:'60%'});

$('.js-wp-4').waypoint(function(direction){


	$('.js-wp-4').addClass('animated pulse');
}, {offset:'60%'});



	/*Navigation scroll */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
});