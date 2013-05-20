/*
	* Acive Hover States 1.1.2
	* http://github.com/ttbarnes/Active-Hover-States
	*
	* Author: Tony Barnes
	* http://tonybarnes.me
	* No license or copyright - do what you like
	*
	* Last updated: 20/05/2013
	* Requirments: 
	* 1: jQuery
	*
*/
;(function($){
	
	var methods = {
		init : function(options) {
		
			if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) { //viewport meta tag manipulation - alter the viewport meta tag for better portait/landscape rendering (iphone,ipad detection)
				var $viewport = $('head').children('meta[name="viewport"]'); 
				$(window).bind('orientationchange', function() { 
					if (window.orientation == 90 || window.orientation == -90 || window.orientation == 270) {
						$viewport.attr('content', 'height=device-width,width=device-height,initial-scale=1.0,maximum-scale=1.0');
					} 
					else {
						$viewport.attr('content', 'height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0');
					}
				}).trigger('orientationchange');
			}

		  //default settings
			var defaultSettings = $.extend({
				selectors: {
					target: '.activeHoverStates'
				},
				fadeIn: true, //fade in
				oddEven: true, //oddEven, first and last classes
				parentBgColourChange: true //parent BG colour change
			}, options);
			
			return this.each(function(index, elment){
				if ( $(this).children('div, li').length > 0 ) { //must be a div or li
					var	parentElmWrapper = $(this).parent().parent();
					var	parentElm = $(this);
					
					if (defaultSettings.fadeIn == true){ //fade in
						parentElm.hide().fadeIn('slow');
					}
					
					function oddEven() { //odd even
						$(parentElm).each(function() { 
							$(this).find('div:odd,li:odd').addClass('odd');
							$(this).find('div:even,li:even').addClass('even');
						});
					}
					if (defaultSettings.oddEven == true){ //odd even
					  oddEven();
					}
					
					var	elm = $(this).children('div,li'); //target
					if (defaultSettings.parentBgColourChange == true){ //parent BG colour change
					  $(elm).each(function() {
							$(this).hover(function(){ //hover/mouseOver
								parentElmWrapper.addClass('activeHovering'); //add parent class
								$(elm).not(this).addClass('active');
								var elmHover = $(this);
								$(elmHover).addClass('hovered');
							},
							function(){ //mouseOut
								parentElmWrapper.removeClass('activeHovering'); //remove parent class
								$(elm).removeClass('active');
								$(this).removeClass('hovered');
							});
						});
					}
					else { //parent BG colour change
					  $(elm).each(function() {
							$(this).hover(function(){ //hover/mouseOver
								$(elm).not(this).addClass('active');
								var elmHover = $(this);
								$(elmHover).addClass('hovered');
							},
							function(){ //mouseOut
								$(elm).removeClass('active');
								$(this).removeClass('hovered');
							});
						});
					}
				}
				else {
					console.log('error! parent element contains something other than a div or li.') //error
				}
				
			});
		}
	};
	$.fn.activeHoverStates = function( method ) {
    if (methods[method]) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } 
		else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } 
		else {
      $.error('Error!');
    } 
  };
	return this;
})(jQuery);