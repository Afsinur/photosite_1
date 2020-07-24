<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photosite | Home</title>
    <link rel="stylesheet" href="css/all_with_body.css">
    <link rel="stylesheet" href="css/sec_1.css">
    <link rel="stylesheet" href="css/sec_2.css">
    <!--script src="https://kit.fontawesome.com/fac1365f02.js" crossorigin="anonymous"></!--script-->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="js/body_1.js"></script>
    <script type="text/javascript" src="js/sec_1.js"></script>
    <script type="text/javascript" src="js/sec_2.js"></script>
    <script type="text/javascript" src="js/sub_sec_2.js"></script>
    <script type="text/javascript" src="js/sub_sub_sec_2.js"></script>
</head>
<body>
<!-- section 1 (sec_1) is the header part -->
    <section class="sec_1">
        <div>
            <h2>
               <a href="">Photosite</a>
            </h2>
        </div>
    </section>
<!--Registraton from-->
    <section class="sec_2">
      <section>
        <div>
          <div>
            <p>Exparience some photos and friends in this short life with Photosite.</p>  
          </div>
          <div>
            <form id="reg">
              <p id="_empty"></p>
              <p><input type="text" name="fst_name" placeholder="First Name(10)" maxlength="10" required></p>
              <p><input type="text" name="lst_name" placeholder="Last Name(10)" maxlength="10" required></p>
              <p><input type="email" name="email" placeholder="Email" maxlength="1000" required></p>
              <p><input type="password" name="password" placeholder="Password" maxlength="1000" required></p>
              <p><input type="password" name="re_password" placeholder="Re-Password" required></p>
              <p><input type="submit" name="submit_reg" value="Sign Up"></p>
            </form>
          </div>
        </div>
        <div>
          <p>Already have an account!&nbsp; <button id="lg_btn">Login</button></p>
        </div>
      </section>
      <section>
        <div>
          <button id="_back">Back</button>
        </div>
        <div>
          <p>Login here.</p>
          <form id="lg_n1">
            <p><input type="email" name="email" placeholder="Email" required></p>
            <p><input type="password" name="password" placeholder="Password" required></p>
            <p><input type="submit" name="ln_submit" value="Login"></p>
          </form>
        </div>
        <div>
          <p><a href="">Forgot password!</a></p>
        </div>
      </section>
    </section>
</body>
</html>