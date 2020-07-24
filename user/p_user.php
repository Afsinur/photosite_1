<?php
if(!isset($_COOKIE['p_user'])) {
    header('location:../index.php');
} else {
    echo $_COOKIE['p_user'];
   ?><br><a href='user_log_out.php'>logout</a> <?php
}?>