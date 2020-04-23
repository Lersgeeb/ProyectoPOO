<?php
    header("Content-Type: application/json");

    include(__DIR__ . "/../classes/Business.php");
    require_once __DIR__ . "/../classes/Businesses.php";
    require_once(__DIR__ . "/../classes/Database.php");

    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){

        

        case 'GET': //Obtener
            $tokenfromDb = Businesses::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
            if($tokenfromDb == $_COOKIE['token']){

                echo json_encode( Businesses::getBusinessFromKey($database->getDatabase(), $_COOKIE['key']) );
            }
            
            else{
               // echo json_encode( Businesses::getDataFromDb($database->getDatabase()) );
            }
            break;
            exit();


    }
    


?>