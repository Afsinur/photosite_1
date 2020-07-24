<?php
include '../connect_database/connect_database.php';
if(isset($_POST['email']) || isset($_POST['password'])){
    $e_m = $mysqli -> real_escape_string(htmlentities(trim($_POST['email'])));
    $p_w = $mysqli -> real_escape_string(htmlentities(trim(md5($_POST['password']))));
    if(!empty($e_m) || !empty($p_w)){
        $sql = "SELECT `email` FROM `reg_1` WHERE `reg_1`.`email`='$e_m'";
        $result = $mysqli -> query($sql);
        if ($result -> num_rows == 1) {
            $sql = "SELECT `email`, `password` FROM `reg_1` WHERE `reg_1`.`email`='$e_m' && `reg_1`.`password`='$p_w'";
            $result = $mysqli -> query($sql);
            if ($result -> num_rows == 1) {
                echo 1;
            }else{
                echo 2;
            }
        }else{
            echo 3;
        }
    }else{
        echo 0;
    }
}else{
    echo 10;
}
?>