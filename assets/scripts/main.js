$(document).ready(function(){
	windowResize();
	$(window).on('resize', windowResize);
	$(".menu p").on("click", swapView);

});

var windowResize = function(){
	if($(window).width() < 1200) {
		$('header h6').hide();
	} else {
		$('header h6').show();
	}
};

var swapView = function(e){
	e.preventDefault();
	var currentView = $('.active').attr('data-target'),
		selectView =$(e.currentTarget).attr('data-target');

	$('.active').removeClass('active');	
	$(e.currentTarget).addClass('active');	

	$('#' + currentView).hide();
	$('#' + selectView).show();

};
