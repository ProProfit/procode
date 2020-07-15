/* global $ */


$(document).ready(function(){
	$('#nav_btn').click(function(open){
		$('#nav_btn').toggleClass('#top_nav');
	/*	$("#top_nav").removeClass("display"); */
	$('#top_nav').css({
 'display':'inline-block'
});
	$('#top_nav ul').css({
  'display':'inline-block'
});
	$('#top_nav').addClass('active');
	$(this).toggleClass('open');
	
	$('#nav_btn').click(function(close){
		$('#top_nav').css({
 'display':''
});
	$("#top_nav").removeClass("active");
	$('#top_nav').addClass('.active_close');

	});
	
	
	
});
	
});


