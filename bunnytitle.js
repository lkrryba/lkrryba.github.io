$(document).ready(function() {
  /*$("button").prop("disabled", true);*/
  $("h1").addClass("animated bounce");

  $("a").mouseenter(function() {
    $("a").css("color", "green");
  });

  $("a").mouseout(function() {
    $("a").css("color", "blue");
  });

  $('[data-toggle="tooltip"]').tooltip();

  /* $("a").mouseenter(function() {
    alert("xxx");
  });*/
});
