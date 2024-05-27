// jquery mobile
$(document).on('pagecreate', function(evt){
	$('#section').on('tap', function(e){
		$('#cube').addClass('testtouch');
	});

	$('#section').on('tap', function(e){
		$('#cube').removeClass('testtouch');
	});
});

