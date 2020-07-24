<?php
$host_name = "localhost";
$user_name = "root";
$password = "";
$database_name = "photosite_1";
$mysqli = new mysqli($host_name, $user_name, $password, $database_name);
if($mysqli -> connect_errno){
    echo "Failed to connect MYSQL: ".$mysqli -> connect_error;
    exit();
}
?>