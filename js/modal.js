$(".button").click(function () {
  var buttonId = $(this).attr("id");
  $("#modal-container").removeAttr("class").addClass(buttonId);
  $("body").addClass("modal-active");
});

$(".close-bg").click(function () {
  $("#modal-container").addClass("out");
  $("body").removeClass("modal-active");
});



$(".button2").click(function () {
  var buttonId = $(this).attr("id");
  $("#modal-container2").removeAttr("class").addClass(buttonId);
  $("body").addClass("modal-active");
});

$(".close-bg").click(function () {
  $("#modal-container2").addClass("out");
  $("body").removeClass("modal-active");
});
