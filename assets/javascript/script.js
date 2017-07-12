

$(document).ready(function(){
//Direction means to detect whether or not user is scrolling up or down.
	$('.js-section-features').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass('sticky');
		}else{
			$('nav').removeClass('sticky');
		}
	}, {
		offset:"60px;"
	});
});