$(document).ready(function() {
  var url = "https://bunny-census.herokuapp.com/census?callback=?";
  $.ajax({
    method: "GET",
    url: url,
    dataType: "jsonp"
  })
    .done(res => console.log(res))
    .fail(error => console.log(error));
});
