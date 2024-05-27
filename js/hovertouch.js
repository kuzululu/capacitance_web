// jquery mobile
$(document).on('pagecreate', function(evt){
	$('.navbar-brand').on('tap', function(e){
		$('#hoverDiv').addClass('hoverAddTouch');
	});

	$('.navbar-brand').on('tap', function(e){
		$('#hoverDiv').removeClass('hoverAddTouch');
	});
});
