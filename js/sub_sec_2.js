$(document).ready(() => {
  var lg_eml = $("#lg_n1>p>input[name='email']");
  var lg_ps = $("#lg_n1>p>input[name='password']");
  var b_color = "rgba(0,150,220,0.25)";
  var b_color_1 = "rgba(0,250,50,0.25)";
  lg_eml.keyup(() => {
    var email_1 = lg_eml.val();
    var password_1 = lg_ps.val();
    if (email_1 == "") {
      if (password_1 == "") {
        lg_ps.removeAttr("style");
        lg_eml.removeAttr("style");
      } else {
        lg_eml.removeAttr("style");
      }
    } else {
      $.ajax({
        type: "post",
        url: "post/login.php",
        data: {
          email: email_1,
          password: password_1,
        },
        success: function (data) {
          console.log(data);
          if (data === "3") {
            if (password_1 == "") {
              lg_eml.css("background", b_color);
            } else {
              lg_eml.css("background", b_color);
              lg_ps.css("background", b_color);
            }
          } else if (data === "2") {
            lg_eml.css("background", b_color_1);
          } else if (data === "1") {
            lg_eml.css("background", b_color_1);
            lg_ps.css("background", b_color_1);
          }
        },
      });
    }
  });
  lg_ps.keyup(() => {
    var email_1 = lg_eml.val();
    var password_1 = lg_ps.val();
    if (password_1 == "") {
      lg_ps.removeAttr("style");
    } else {
      $.ajax({
        type: "post",
        url: "post/login.php",
        data: {
          email: email_1,
          password: password_1,
        },
        success: function (data) {
          console.log(data);
          if (data === "3") {
            lg_ps.css("background", b_color);
          } else if (data === "2") {
            lg_ps.css("background", b_color);
          } else if (data === "1") {
            lg_ps.css("background", b_color_1);
          }
        },
      });
    }
  });
});
