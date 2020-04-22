<?php

    include(__DIR__ . "/../classes/Business.php");
    //require_once __DIR__ . "..\classes\Businesses.php";
    require_once(__DIR__ . "/../classes/Database.php");

    $database = new Database();

    if( isset( $_POST) ){
        $business = new Business($_POST);
        $business->saveBusiness($database);
    }



?>