function addDynamicTappedClass(domClass){
	$('.' + domClass + ' a').on('touchstart', function(e){
		$(this).addClass('tapped');
	});

	$('.' + domClass + ' a').on('touchend', function(e){
		$(this).removeClass('tapped');
	});

	$('.' + domClass + ' a').on('tap', function(e){
		e.preventDefault();
		
		//do your thing
		
		return false;
	});
}