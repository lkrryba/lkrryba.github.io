$(document).ready(function() {
  /*$("button").prop("disabled", true);*/
  $("h1").addClass("animated bounce");

  $("#clickhere").mouseenter(function() {
    $("#clickhere").css("color", "green");
  });

  $("#clickhere").mouseout(function() {
    $("#clickhere").css("color", "blue");
  });

  $('[data-toggle="tooltip"]').tooltip();

  /* $("a").mouseenter(function() {
    alert("xxx");
  });*/
});
