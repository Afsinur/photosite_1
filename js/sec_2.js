$(document).ready(() => {
  var x = $("section.sec_2>section>div+div button#lg_btn");
  var y = $("section.sec_2>section+section>div>button#_back");
  var f = $("section.sec_2>section>div>div+div>form#reg");
  var f_1 = $(
    'section.sec_2>section>div>div+div>form#reg>p>input[name="fst_name"]'
  );
  var l_1 = $(
    'section.sec_2>section>div>div+div>form#reg>p>input[name="lst_name"]'
  );
  var e_1 = $(
    'section.sec_2>section>div>div+div>form#reg>p>input[name="email"]'
  );
  var p_1 = $(
    'section.sec_2>section>div>div+div>form#reg>p>input[name="password"]'
  );
  var p_2 = $(
    'section.sec_2>section>div>div+div>form#reg>p>input[name="re_password"]'
  );
  x.click(() => {
    $("section.sec_2").css("transform", "translate(-50%)");
  });
  y.click(() => {
    $("section.sec_2").css("transform", "translate(0%)");
  });
  f.submit((e) => {
    e.preventDefault();
    var fst_name_1 = f_1.val();
    var lst_name_1 = l_1.val();
    var email_1 = e_1.val();
    var password_1 = p_1.val();
    var password_2 = p_2.val();
    var submit = $(
      'section.sec_2>section>div>div+div>form#reg>p>input[name="submit_reg"]'
    ).val();
    var str_pos = email_1.indexOf("@", email_1.length - 10);
    var str_pos_1 = email_1.indexOf(".", email_1.length - 4);

    if (password_1 != password_2) {
      f.find("p#_empty").html("Password don't match!");
    } else {
      if (str_pos == -1 || str_pos_1 == -1) {
        f.find("p#_empty").html("Please insert a valid gmail address!");
      } else {
        $.ajax({
          type: "POST",
          url: "post/reg.php",
          data: {
            fst_name: fst_name_1,
            lst_name: lst_name_1,
            email: email_1,
            password: password_1,
            submit_reg: submit,
          },
          success: function (data) {
            if (data == 10) {
              f_1.val("");
              l_1.val("");
              e_1.val("");
              p_1.val("");
              p_2.val("");
              $("section.sec_2").css("transform", "translate(-50%)");
              f.find("p#_empty").html("");
            } else if (data == 1) {
              f.find("p#_empty").html("Please insert all data correctly!");
            } else if (data == 12) {
              f.find("p#_empty").html(
                "First and last name can not be more than 10 characters!"
              );
            }
          },
        });
      }
    }
  });
});
