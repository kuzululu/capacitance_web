// jquery mobile
$(document).on('pagecreate', function(evt){
	$('#mySidenav').on('tap', function(e){
		$('.linktouch').addClass('linkTouch');
	});

	$('#mySidenav').on('tap', function(e){
		$('.linktouch').removeClass('linkTouch');
	});
});