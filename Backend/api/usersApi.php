<?php
    header("Content-Type: application/json");

    include(__DIR__ . "/../classes/User.php");
    require_once __DIR__ . "/../classes/Users.php";
    require_once(__DIR__ . "/../classes/Database.php");

    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){

        case 'GET': //Obtener
            if(isset($_COOKIE['key'])){
                $tokenfromDb = Users::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
                if($tokenfromDb == $_COOKIE['token']){
    
                    echo json_encode( Users::getUserFromKey($database->getDatabase(), $_COOKIE['key']) );
                }
                else
                    echo false;
            }
            else{
                echo false;
            }
            break;
            exit();


    }
    


?>