$.fn.orion = function(options){
	var settings = {
		speed	 			: 300,     				// dropdown speed (ms)
		animation			: "fade",				// dropdown or panel animation
		indicator			: false					// dropdown indicator
	}
	$.extend( settings, options );
	$(".orion-menu").prepend("<li class='showhide'><span class='title'>MENU</span><span class='icon'><em></em><em></em><em></em><em></em></span></li>");
	
	var firstClick = 0;
	
	if(settings.indicator == true){
		$(".orion-menu").find("li").each(function(){
			if($(this).children("ul").length > 0){
				$(this).append("<span class='indicator'></span>");
			}
		});
	}
	
	detectScreen();
	
	$(window).resize(function() {
		detectScreen();
	});
	
	function detectScreen(){
		$(".orion-menu").find("li, a").unbind();
		$(".orion-menu").find("ul").hide(0);
		// original size 768
		if(window.innerWidth <= 767){
			showCollapse();
			bindClick();
			if(firstClick == 0){
				$(".orion-menu > li:not(.showhide)").hide(0);
			}
		}
		else{
			hideCollapse();
			bindHover();
		}
	}

	function bindHover(){
		
		$(".orion-menu li").bind("mouseover", function(){
			$(this).children("ul").stop(true, true).fadeIn(settings.speed).addClass(settings.animation);
			
		}).bind("mouseleave", function(){
			$(this).children("ul").stop(true, true).fadeOut(settings.speed).removeClass(settings.animation);
			
		})
		

		
		$(".orion-menu a").bind('click',function(e)
		{
			
			// if (( $(this).siblings('ul').length > 0 ) && (((window.innerWidth <= 768) || ($('html').hasClass('touch'))) || ((window.innerWidth >= 768) || ($('html').hasClass('no-touch')))) )	{			
			if ((window.innerWidth <= 767) && ($('html').hasClass('touch'))) {
				e.preventDefault();
				return false;
			}
		})
	}
	function bindClick(){
		
		$(".orion-menu li:not(.showhide)").each(function(){
			if($(this).children("ul").length > 0){
				$(this).children("a").bind("click", function(){
					if ($(this).siblings('ul').length > 0 )
					{
					    var submenu = $(this).siblings('ul')
					    submenu.css('height',submenu.outerHeight()+'px');
						console.log('expanding / contracting' + submenu.outerHeight());
						$(this).siblings("ul").slideToggle(settings.speed).addClass(settings.animation);
						firstClick = 1;
						return false;
					}
					
				});
			}
		});
	}
	function showCollapse(){
		$(".orion-menu > li.showhide").show(0);
		$(".orion-menu > li.showhide").bind("click", function(){
			if($(".orion-menu > li").is(":hidden")){
				$(".orion-menu > li").slideDown(300);
				firstClick = 1;
			}
			else{
				$(".orion-menu > li:not(.showhide)").slideUp(300);
				$(".orion-menu > li.showhide").show(0);
				firstClick = 0;
			}
		});
	}
	function hideCollapse(){
		$(".orion-menu > li").show(0);
		$(".orion-menu > li.showhide").hide(0);
	}
}
