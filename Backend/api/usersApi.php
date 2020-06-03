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
                    
                    if(isset($_GET['productId'])){
                        $liked = User::isliked($database->getDatabase(), $_COOKIE['key'], $_GET['productId']);
                        echo $liked;
                    }
                    else{
                        echo json_encode( Users::getUserFromKey($database->getDatabase(), $_COOKIE['key']) );
                    }
                }
                else
                    echo false;
            }
            else{
                echo false;
            }
            break;
            exit();

        case 'PUT':
            if(isset($_COOKIE['key'])){
                $_PUT = json_decode(file_get_contents('php://input'),true);
                $tokenfromDb = Users::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
                if($tokenfromDb == $_COOKIE['token']){
                    if(isset($_PUT['productLiked']) && isset($_PUT['businessName']) && isset($_PUT['productIndex'] )){
                        $key = User::addProductLiked($database->getDatabase(), $_COOKIE['key'], $_PUT['businessName'], $_PUT['productIndex']);
                        echo $key;

                    }
                }
            }
            break;
            exit();
        case 'DELETE':
            if(isset($_COOKIE['key'])){
                $tokenfromDb = Users::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
                if($tokenfromDb == $_COOKIE['token']){
                    if( isset($_GET['productLikedKey'])){
                        User::removeProductLiked( $database->getDatabase(), $_COOKIE['key'],$_GET['productLikedKey']);
                    }
                }
            }



    }
    


?>