$(document).ready(function(){
	var text_len = 11;
	var msg_len = 250;

	$('#con_msg').html(text_len + ' digits are remaining');

	$('#contact').keyup(function(){
		var text_max = $(this).val().length;
		var text_rem = text_len - text_max;

		$('#con_msg').html(text_rem + ' digits are remaining');
	});

	$('#msg').html(msg_len + ' characters are remaining');

	$('#message').keyup(function(){
		var msg_max = $(this).val().length;
		var msg_rem = msg_len - msg_max;

		$('#msg').html(msg_rem + ' characters are remaining');
	});
});