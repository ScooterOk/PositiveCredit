document.addEventListener("DOMContentLoaded", function(){
	document.addEventListener('scroll', function(e){
		if(window.scrollY > 0){
			document.querySelector('header').classList.add('scroll');
		}else{
			document.querySelector('header').classList.remove('scroll');
		}
	})
});