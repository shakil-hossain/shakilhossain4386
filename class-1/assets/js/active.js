(function($){
	"use strict";
	
	jQuery(document).ready(function($){
		$('.hover').hover(function(){
			$(this).addClass('flip');
		},function(){
			$(this).removeClass('flip');
		});
	});
	
	
	jQuery(window).on("load", function(){
		
	});
	
})(jQuery);
