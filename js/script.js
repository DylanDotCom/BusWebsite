$(document).ready(function() {
$(".card").mouseenter(function() {
		$(this).addClass('highlight_option');
  $(this).children().slideUp("slow");
  $(this).siblings().fadeTo("fast", 0.1);
	})
$(".card").mouseleave(function() {
		$(this).removeClass('highlight_option');
  $(this).children().slideDown("slow");
  $(this).siblings().fadeTo("fast", 1);
	})
  $("label").hide();

});
