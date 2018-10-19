var slick = false;
var targetsY, timeout;
$(document).ready(function(){
	targetsY = {
		aboutSystem : $('#about-system').offset().top - ($(window).height() / 2),
		howItWorks : $('#how-it-works').offset().top - ($(window).height() / 2),
		keyBenefits : $('#key-benefits').offset().top - ($(window).height() / 2),
		positiveCredit : $('#positive-credit').offset().top - ($(window).height() / 2),
		contacts : $('#contacts').offset().top - ($(window).height() / 2)
	}
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

		if($(document).scrollTop() < targetsY.aboutSystem){
			$('header li').removeClass('current');
		}else if($(document).scrollTop() > targetsY.aboutSystem && $(document).scrollTop() < targetsY.howItWorks){
			$('header li').removeClass('current');
			$('header li a[href="#about-system"]').closest('li').addClass('current');
		}else if($(document).scrollTop() > targetsY.howItWorks && $(document).scrollTop() < targetsY.keyBenefits){
			$('header li').removeClass('current');
			$('header li a[href="#how-it-works"]').closest('li').addClass('current');
		}else if($(document).scrollTop() > targetsY.keyBenefits && $(document).scrollTop() < targetsY.positiveCredit){
			$('header li').removeClass('current');
			$('header li a[href="#key-benefits"]').closest('li').addClass('current');
		}else if($(document).scrollTop() > targetsY.positiveCredit && $(document).scrollTop() < targetsY.contacts){
			$('header li').removeClass('current');
			$('header li a[href="#positive-credit"]').closest('li').addClass('current');
		}else if($(document).scrollTop() > targetsY.contacts){
			$('header li').removeClass('current');
			$('header li a[href="#contacts"]').closest('li').addClass('current');
		}
	});
	$('#go-top').click(function(e){
		var body = $("html, body");
		body.stop().animate({scrollTop:0}, 700, 'swing');
	});
	$('.header__mobile_button').click(function(e){
		$('header').toggleClass('active');
	});

	$(window).resize(function(e){
		clearTimeout(timeout);
		if($(document).width() > 1000){
			if($('header').hasClass('active')){
				$('header').removeClass('active');
			}
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
		timeout = setTimeout(function(){
			targetsY = {
				aboutSystem : $('#about-system').offset().top - ($(window).height() / 2),
				howItWorks : $('#how-it-works').offset().top - ($(window).height() / 2),
				keyBenefits : $('#key-benefits').offset().top - ($(window).height() / 2),
				positiveCredit : $('#positive-credit').offset().top - ($(window).height() / 2),
				contacts : $('#contacts').offset().top - ($(window).height() / 2)
			}
		}, 500);
	});

	$('.scroll-anchor').click(function(e) {
		if($('header').hasClass('active')){
			$('header').removeClass('active');
		}
		$('header li').removeClass('current');
		$(this).closest('li').addClass('current');
		var target = $(this).attr('href');
		var y = $(target).offset().top - 100;
		var body = $("html, body");
		body.stop().animate({scrollTop : y}, 700, 'swing');
		e.preventDefault();
	});

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