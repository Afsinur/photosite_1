$(document).ready(() => {
  var x = $("section.sec_1").height();
  $(document).scroll(() => {
    if (window.scrollY > 0) {
      $("section.sec_1").css("position", "fixed");
      $("body").css("margin-top", x + "px");
    } else {
      $("section.sec_1").css("position", "relative");
      $("body").css("margin-top", "0px");
    }
  });
});
