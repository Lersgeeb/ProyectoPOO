<?php
    header("Content-Type: application/json");

    include(__DIR__ . "/../classes/Cart.php");
    require_once __DIR__ . "/../classes/Users.php";
    require_once(__DIR__ . "/../classes/Database.php");

    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':

            if(isset($_COOKIE['key'])){
                $tokenfromDb = Users::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
                if($tokenfromDb == $_COOKIE['token']){
                    $_POST = json_decode(file_get_contents('php://input'),true);
                    $cartProduct = new Cart($_POST["businessName"],$_POST["productIndex"],$_POST["quant"]);
                    $cartProduct->addProductOnCart($database->getDatabase(),$_COOKIE['key']);
                }
            }
            
            break;
            exit();

        case 'DELETE':
            if(isset($_COOKIE['key'])){
                $tokenfromDb = Users::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
                if($tokenfromDb == $_COOKIE['token']){
                    if(isset($_GET['cartProcuctKey'])){
                        Cart::removeProductOnCart( $database->getDatabase(), $_COOKIE['key'],$_GET['cartProcuctKey']);
                        echo "producto Eliminado";
                    }
                }
            }
            break;
            exit();
            

                
            
            
    }