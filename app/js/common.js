$(function() {

	$('#input-email span').on('mouseover', function () {
	    $('#input-email div').css("display","block").fadeIn(300);
    });
    $('#input-email span').on('mouseout', function () {
        $('#input-email div').css("display","none").fadeOut(300);
    });
});
