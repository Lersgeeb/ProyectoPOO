<?php
    include(__DIR__ . "/../classes/User.php");
    require_once __DIR__ . "/../classes/Users.php";
    require_once(__DIR__ . "/../classes/Database.php");
    $database = new Database();

    if( isset( $_POST) ){
        $_POST = json_decode(file_get_contents('php://input'),true);
        $email = $_POST["email"];
        $password = $_POST["password"];
        $users = new Users($database->getDatabase());
        $login = $users->authentication($email,$password);
        echo $login;
            
    }
?>