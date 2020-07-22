$(document).ready(() => {
  var x = $("section.sec_2>section>div+div button#lg_btn");
  var y = $("section.sec_2>section+section>div>button#_back");
  x.click(() => {
    $("section.sec_2").css("transform", "translate(-50%)");
  });
  y.click(() => {
    $("section.sec_2").css("transform", "translate(0%)");
  });
});
