$(document).ready(() => {
  var f = $("section.sec_2>section>div>div+div>form#reg");
  var f_1 = $(
    'section.sec_2>section>div>div+div>form#reg>p>input[name="fst_name"]'
  );
  var l_1 = $(
    'section.sec_2>section>div>div+div>form#reg>p>input[name="lst_name"]'
  );
  f_1.keyup(() => {
    var x = f_1.val().length;
    if (x == 10) {
      f.find("p#_empty").html(
        "First and last name can not be more than 10 characters!"
      );
    } else {
      f.find("p#_empty").html("");
    }
  });
  l_1.keyup(() => {
    var x = l_1.val().length;
    if (x == 10) {
      f.find("p#_empty").html(
        "First and last name can not be more than 10 characters!"
      );
    } else {
      f.find("p#_empty").html("");
    }
  });
});
