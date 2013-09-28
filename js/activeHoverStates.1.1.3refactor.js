/*
	* Acive Hover States 1.1.3
	* http://github.com/ttbarnes/Active-Hover-States
	*
	* Author: Tony Barnes
	* http://tonybarnes.me
	* No license or copyright - do what you like
	*
	* Last updated: 21/05/2013
	* Requirments:
	* 1: jQuery
	*
*/
;(function($){
	
	var methods = {
		init : function(options) {
		
			if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) { //viewport meta tag manipulation - alter the viewport meta tag for better portait/landscape rendering (iphone,ipad detection)
				var headViewport = $('head').children('meta[name="viewport"]'); 
				jQuery(window).bind('orientationchange', function() { 
					if (window.orientation == 90 || window.orientation == -90 || window.orientation == 270) {
						headViewport.attr('content', 'height=device-width,width=device-height,initial-scale=1.0,maximum-scale=1.0');
					} 
					else {
						headViewport.attr('content', 'height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0');
					}
				}).trigger('orientationchange');
			}

			var defaultSettings = $.extend({ //default settings
				selectors: {
					target: 'div.activeHoverStates'
				},
				fadeIn: true, //fade in
				oddEven: true, //oddEven, first and last classes
				parentBgColourChange: true, //parent BG colour change
				prevAllClasses: true //prevAll classes on hover
			}, options);
			
			return this.each(function(index, elment){
				
			  if (jQuery(this).children('div, li').length > 0 ) { //must be a div or li
					var	parentElmWrapper = jQuery(this).parent().parent();
					var	parentElm = jQuery(this);
					var	elm = jQuery(this).children('div,li');
					
					function oddEven() { //odd even
						jQuery(parentElm).each(function() { 
							jQuery(this).find('div:odd,li:odd').addClass('odd');
							jQuery(this).find('div:even,li:even').addClass('even');
						});
					}
					
					//test and apply config/options
					if (defaultSettings.fadeIn == true){ //fade in
						parentElm.hide().fadeIn('slow');
					}
					
					if (defaultSettings.oddEven == true){ //odd even
					  oddEven();
					}
					
					jQuery(elm).each(function() {
						jQuery(this).hover(function(){
							if (defaultSettings.parentBgColourChange == true){ //parent background colour change
								parentElmWrapper.addClass('activeHovering');
								jQuery(elm).not(this).addClass('active');
							}
														
							jQuery(elm).not(this).addClass('active');
							elmHover = $(this);
							elmHover.addClass('hovered');
							if (defaultSettings.prevAllClasses == true){ //prevAll classes on hover
								$(this).prevAll().addClass('activePrev');
							}
						},
						function(){ //mouseOut
							if (defaultSettings.parentBgColourChange == true){
								parentElmWrapper.removeClass('activeHovering');
							}
							
							jQuery(elm).removeClass('active');
							jQuery(this).removeClass('hovered');
							if (defaultSettings.prevAllClasses == true){ //prevAll classes on hover
								jQuery(this).prevAll().removeClass('activePrev');
							}
						});
					});
				}
				else {
					console.log('error! parent element contains something other than a div or li.') //error
				}
			});
		}
	};
	$.fn.activeHoverStates = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } 
		else if (typeof method === 'object' || ! method) {
      return methods.init.apply(this, arguments);
    } 
		else {
      $.error('Error!');
    } 
  };
	return this;
})(jQuery);