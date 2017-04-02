//bootstrap carousel
var myCarousel = function(){
	$('#myCarousel').carousel({
		interval:5000,
		pause:false
	});
};

//bootstrap tooltip
var navToolTip = function(){
	$('.nav-item a').tooltip();
};

var smoothScroll = function(){
	$('.nav-item > a').click(function(){
		var target = $(this).attr('href');
		$('body').animate({scrollTop:$(target).offset().top}, 400);

		$('.nav-item').removeClass('active');
		$(this).parent().addClass('active');
	});
	
	
	$(window).scroll(function(){
		var distance = $(window).scrollTop() + 300;
		
		if(distance >= $('#sec-five').offset().top){
			$('.nav-item').removeClass('active');
			$('.nav-item  a[href="#sec-five"]').parent().addClass('active');
		}else if(distance >= $('#sec-four').offset().top){
			$('.nav-item').removeClass('active');
			$('.nav-item  a[href="#sec-four"]').parent().addClass('active');
		}else if(distance >= $('#sec-three').offset().top){
			$('.nav-item').removeClass('active');
			$('.nav-item  a[href="#sec-three"]').parent().addClass('active');
		}else if(distance >= $('#sec-two').offset().top){
			$('.nav-item').removeClass('active');
			$('.nav-item  a[href="#sec-two"]').parent().addClass('active');
		}else{
			$('.nav-item').removeClass('active');
			$('.nav-item  a[href="#picShow"]').parent().addClass('active');
		}
	});
};

var wow = new WOW({
	boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});

$(function(){
	navToolTip();
	smoothScroll();
	myCarousel();

	wow.init();
});