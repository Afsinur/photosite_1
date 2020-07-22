$(document).ready(() => {
  //all vars
  var x = $(document).height();
  var y = $(window).height();
  var z = x - y;
  //scroll down effect function
  $(document).scroll(() => {
    if (window.scrollY == z) {
      console.log(1);
    } else if (window.scrollY == 0) {
      console.log(0);
    }
  });
});
