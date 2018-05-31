var slick = false;
$(document).ready(function(){
	if($(document).scrollTop() > 0){
		$('header').addClass('scroll');
	}else{
		$('header').removeClass('scroll');
	}
	$(document).scroll(function(e){
		if($(document).scrollTop() > 0){
			$('header').addClass('scroll');
		}else{
			$('header').removeClass('scroll');
		}
	});
	$('#go-top').click(function(e){
		var body = $("html, body");
		body.stop().animate({scrollTop:0}, 500, 'swing');
	});
	$('.header__mobile_button').click(function(e){
		$('header').toggleClass('active');
	});

	$(window).resize(function(e){
		if($(document).width() > 1000){
			if(slick){
				$('.main__howitworks_steps').slick('unslick');
				slick = false;
			}
		}else{
			if(!slick){
				$('.main__howitworks_steps').slick({
				  dots: true,
				  infinite: true,
				  speed: 300,
				  slidesToShow: 1,
				  adaptiveHeight: true
				});	
				slick = true;
			}
		}
		
	})

	if($(document).width() < 1000){
		$('.main__howitworks_steps').slick({
		  dots: true,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  adaptiveHeight: true
		});	
		slick = true;
	}

	
});