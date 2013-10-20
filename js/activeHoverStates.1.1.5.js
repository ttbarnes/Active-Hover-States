/*
	* Active Hover States 1.1.5
	* Control and highlight parent or next/prev items
	* http://github.com/ttbarnes/Active-Hover-States
	*
	* Author: Tony Barnes
	* http://tonybarnes.me
	* No license or copyright - do what you like
	*
	* Last updated: 20/10/2013
	* Requirments:
	* 1: jQuery
	*
*/
;(function($){
	
	var methods = {
		init : function(options) {

			var defaultSettings = $.extend({ //default settings
				target: '.activeHoverStates',
				oddEven: true, //oddEven, first and last classes
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
					
					if (defaultSettings.oddEven == true){ //odd even
					  oddEven();
					}
					
					jQuery(elm).each(function() {
						jQuery(this).hover(function(){
							jQuery(elm).not(this).addClass('active');
							elmHover = $(this);
							elmHover.addClass('hovered');
							if (defaultSettings.prevAllClasses == true){ //prevAll classes on hover
								$(this).prevAll().addClass('activePrev');
							}
						},
						function(){
							jQuery(elm).removeClass('active');
							jQuery(this).removeClass('hovered');
							if (defaultSettings.prevAllClasses == true){ //prevAll classes on hover
								jQuery(this).prevAll().removeClass('activePrev');
							}
						});
					});
				}
				else {
					console.log('error! parent element contains something other than a div or li.')
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