$(document).ready(function() {
  $(".card").children("div").hide();
$(".card").mouseenter(function() {
		$(this).addClass('highlight_option');
  $(this).children("div").slideDown("slow");
  $(this).siblings().fadeTo("fast", 0.1);
	})
$(".card").mouseleave(function() {
		$(this).removeClass('highlight_option');
  $(this).children("div").slideUp("slow");
  $(this).siblings().fadeTo("fast", 1);
	})
  $("label").hide();
$(".card1").on("click", function(){
   window.location.href = "Newspage.html";
})
$(".card3").on("click", function(){
   window.location.href = "TicketBooking.html";
})
$(".card4").on("click", function(){
   window.location.href = "Safetypage.html";
})
$(".card5").on("click", function(){
   window.location.href = "Bustimetablepage.html";
})
});
