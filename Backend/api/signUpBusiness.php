<?php

    include(__DIR__ . "/../classes/Business.php");
    require_once __DIR__ . "/../classes/Businesses.php";
    require_once(__DIR__ . "/../classes/Database.php");

    $database = new Database();

    if( isset( $_POST) ){
        $_POST = json_decode(file_get_contents('php://input'),true);
        $business = new Business($_POST);
        $businesses = new Businesses($database->getDatabase());
        $signUp = $businesses->saveBusiness($business);
        if($signUp)
            echo json_encode($signUp);
    }


?>