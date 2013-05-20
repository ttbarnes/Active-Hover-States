/*
	* Acive Hover States 1.1.1
	* http://github.com/ttbarnes/Active-Hover-States
	*
	* Author: Tony Barnes
	* http://tonybarnes.me
	* No license or copyright - do what you like
	*
	* Last updated: 09/05/2013
	* Requirments: 
	* 1: jQuery
	*
*/
;(function($){
	
	var methods = {
		init : function(options) {
		
			if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) { //viewport meta tag manipulation - alter the viewport meta tag for better portait/landscape rendering (iphone,ipad detection)
				var $viewport = $('head').children('meta[name="viewport"]'); //cache the viewport tag if the user is using an iPhone
				$(window).bind('orientationchange', function() { //bind an event handler to the window object for the orientationchange event
					if (window.orientation == 90 || window.orientation == -90 || window.orientation == 270) {
						$viewport.attr('content', 'height=device-width,width=device-height,initial-scale=1.0,maximum-scale=1.0'); //landscape
					} 
					else {
						$viewport.attr('content', 'height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0'); //portrait
					}
				}).trigger('orientationchange'); //trigger an orientationchange event on the window object to initialize this code (basically in-case the user opens the page in landscape mode)
			}

		  //default settings
			var defaultSettings = $.extend({
				selectors: {
					target: '.activeHoverStates'
				},
				oddEvenFirstLast: true
			}, options);
			
			
			return this.each(function(index, elment){
				
				if ( $(this).children('div, li').length > 0 ) { //must be a div or li
					var	elm = $(this).children('div,li');
					
					function oddEvenFirstLast() {	//odd even first and last
						$(elm, this).each(function() { 
							$('div:odd,li:odd').addClass('odd');
							$('div:even,li:even').addClass('even');
						});
					}
						
					if (defaultSettings.oddEvenFirstLast == true){ //odd even first and last
					  oddEvenFirstLast();
					}
					
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