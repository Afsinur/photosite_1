<?php
setcookie("p_user", null, time() - 6000,"/");
header('location:../index.php');
?>