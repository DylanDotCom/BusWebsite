$(document).ready(function() {
  $(".card").children("div").hide();
$(".card").mouseenter(function() {
  $(this).children("div").slideDown("slow");
  $(this).siblings().fadeTo("fast", 0.1);
	})
$(".card").mouseleave(function() {
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

$("#paymentform").submit(function(event){
   event.preventDefault();
   var cardholdername = $("#cardholder-name").val();
   var cardnumber = $("#card-number").val();
   var expiration = $("#expiry-date").val();
   var cvv = $("#cvv").val();
   console.log("Cardholder's name is: " + cardholdername + ".\nCard number is: " + cardnumber + ".\nExpiry date is: " + expiration + ".\n CV number is" + cvv + ".");
  $("#paymentform").append().text("Ticket Booked!\n" + "Cardholder's name is: " + cardholdername + ".\nCard number is: " + cardnumber + ".\nExpiry date is: " + expiration + ". \n CV number is " + cvv + ".")
})

$("input:radio[name=rating]").click(function(){
  $("#SubmitBtn").on("click", function(event){
  event.preventDefault();
    $("#sub").append().text("Subscribed! \nWe'll' keep you up to date!");


});
});
 $("#SubmitBtn").on("click", function(event){
  event.preventDefault();
   $("#sub").append().text("Error! Reload page to refresh");

   });

});

