$(document).ready(function(e) {
  $('ul.egTop1').listIconManipulator({
    content: {
      iconContent: '!> ',
      tooltip:false
    }
  });
  $('ul.egTop2').listIconManipulator({
    content: {
      iconContent: '<img src="img/icon-warning.png" alt="Warning"/> ',
      tooltip:false
    }
  });
  
  $('ul.egTop3').listIconManipulator({
    content: {
      iconContent: '\\o/ ',
      tooltip:false
    }
  });
  
  $('ul.egTop4').listIconManipulator({
    content: {
      iconContent: ':-) ',
      tooltip:false
    }
  });
	
  $('ul.egTop5').listIconManipulator({
    content: {
      iconContent: 'easy: ',
    }
  });
  
  
  $('#demoExample2').listIconManipulator({
    content: {
      iconContent: '!*! ',
      tooltip:true,
      tooltipContent:'My tooltip! <a href="#">More Info</a>'
    }
  });
	
	
	//new
	
  $('#sectionTooltips ul').not('ul ul').listIconManipulator({
    content: {
      iconContent: '!*! ',
      tooltip:true,
      tooltipContent:'My tooltip! <a href="#">More Info</a>'
    }
  });
	
  
	var sectionExamples = $('#sectionExamples');
	
	$(sectionExamples).find('div.large-2:eq(0)').each(function(){ //first box/UL section
		var i = $(this);
		i.find('ul:eq(0)').listIconManipulator({
			content: {
				iconContent: '!!! ',
				iconColor:'purple'
			}
		});
		i.find('ul:eq(1)').listIconManipulator({
			content: {
				iconContent: '\\o/ ',
				iconColor:'blue'
			}
		});
		i.find('ul:eq(2)').listIconManipulator({
			content: {
				iconContent: 'OMG:'
			}
		});
		
		i.find('ul:eq(3)').listIconManipulator({
			content: {
				iconContent: '!> ',
				iconColor:'#FFF'
			}
		});
  });
	
	$(sectionExamples).find('div.large-2:eq(1)').each(function(){ //second box/UL section
		var i = $(this);
		i.find('ul:eq(0)').listIconManipulator({
			content: {
				iconContent: '<img src="img/icon-tick.png" alt="Check" />'
			}
		});
		i.find('ul:eq(1)').listIconManipulator({
			content: {
				iconContent: '<img src="img/icon-info.png" alt="Info" />'
			}
		});
		i.find('ul:eq(2)').listIconManipulator({
			content: {
				iconContent: '<img src="img/icon-star.png" alt="Featured" />'
			}
		});
		
		i.find('ul:eq(3)').listIconManipulator({
			content: {
				iconContent: '<img src="img/icon-arrow.png" alt="Check" />'
			}
		});
  });
	
	$(sectionExamples).find('div.large-2:eq(2)').each(function(){ //third box/UL section
		var i = $(this);
		i.find('ul').not('ul > ul').listIconManipulator({
			content: {
				iconContent: '--',
				tooltip:false
			}
		});
		
		i.find('ul ul.moreInfo').listIconManipulator({
			content: {
				iconContent: '--',
				tooltip:true,
				tooltipContent:'<a href="#">More info</a>'
			}
		});
		i.find('ul ul.warning').listIconManipulator({
			content: {
				iconContent: '!! ',
				tooltip:true,
				tooltipContent:'Only avaliable in the UK'
			}
		});
  });
	
	$(sectionExamples).find('div.large-2:eq(3)').each(function(){ //final box/UL section
		var i = $(this);
		i.find('ul.featured').listIconManipulator({
			content: {
				iconContent: '<img src="img/icon-star.png" alt="Featured" />'
			}
		});
		i.find('ul.textReplace').listIconManipulator({
			content: {
				iconContent: '! >> ',
				iconColor:'#EEE'
			}
		});
		i.find('ul.cool').listIconManipulator({
			content: {
				iconContent: '<img src="img/icon-cool.png" alt="Cool" />'
			}
		});
		i.find('ul.toolTipMe').listIconManipulator({
			content: {
				iconContent: 'hover:',
				tooltip:true,
				tooltipContent:'Boo!'
			}
		});
  });
	
});