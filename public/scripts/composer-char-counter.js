$(document).ready(function () {
  console.log("ready");
countingchar.addEventListener("keyup", function(e){
  var textEntered = $("#countingchar").val();
  var counter = (140 - textEntered.length);

  $(this).siblings("#characters").text(counter);

  if (counter < 0){
    $(this).siblings("#characters").css({"color":"red"});
  } else {
    $(this).siblings("#characters").css({"color":"black"});
  }
})
});
