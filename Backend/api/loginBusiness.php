<?php
    include(__DIR__ . "/../classes/Business.php");
    require_once __DIR__ . "/../classes/Businesses.php";
    require_once(__DIR__ . "/../classes/Database.php");
    $database = new Database();

    if( isset( $_POST) ){
        $_POST = json_decode(file_get_contents('php://input'),true);
        $email = $_POST["email"];
        $password = $_POST["password"];
        $businesses = new Businesses($database->getDatabase());
        $login = $businesses->authentication($email,$password);
        echo true;
            
    }



?>