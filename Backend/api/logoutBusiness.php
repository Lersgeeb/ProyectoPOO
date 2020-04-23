<?php
    include(__DIR__ . "/../classes/Business.php");
    require_once(__DIR__ . "/../classes/Database.php");
    $database = new Database();

    if( isset( $_GET) ){

        Business::removeToken($database->getDatabase(),$_COOKIE["key"]);
        setcookie("token", "null", time() - (86400 * 30), "/");
        setcookie("key", "null", time() - (86400 * 30), "/");
        echo true;
            
    }
?>