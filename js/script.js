$(document).ready(function() {
$(".card").mouseenter(function() {
		$(this).addClass('highlight_option');
  $(".card").next().slideDown("slow");
  $(this).siblings().fadeTo("fast", 0.1);
	})
$(".card").mouseleave(function() {
		$(this).removeClass('highlight_option');
  $(".card").next().slideUp("slow");
  $(this).siblings().fadeTo("fast", 1);
	})


});
