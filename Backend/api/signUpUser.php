<?php

    include(__DIR__ . "/../classes/User.php");
    require_once __DIR__ . "/../classes/Users.php";
    require_once(__DIR__ . "/../classes/Database.php");

    $database = new Database();

    if( isset( $_POST) ){
        $_POST = json_decode(file_get_contents('php://input'),true);
        $user = new User($_POST);
        $users = new Users($database->getDatabase());
        $signUp = $users->saveUser($user);
        if($signUp)
            echo json_encode($signUp);
    }


?>