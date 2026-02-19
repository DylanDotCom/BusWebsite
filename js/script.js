$(document).ready(function() {
$(".card").mouseenter(function() {
		$(this).addClass('highlight_option');
  $(this).children("label").slideUp("slow");
  $(this).siblings().fadeTo("fast", 0.1);
	})
$(".card").mouseleave(function() {
		$(this).removeClass('highlight_option');
  $(this).children("label").slideDown("slow");
  $(this).siblings().fadeTo("fast", 1);
	})
  $("label").hide();

});
