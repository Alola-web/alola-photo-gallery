// alola photo gallery image
$(function() {
	$('.gallery-view-img').click(function(e){
		e.preventDefault();
		$('#gallery-view').addClass('active');
		$('#gallery-view').find('img').attr('src',$(this).children().attr('src'));
	});
	$('.gallery-view-close,#gallery-view').click(function(e){
		e.preventDefault();
		$('#gallery-view').removeClass('active');
		$('#gallery-view').find('img').attr('src','');
	});
});