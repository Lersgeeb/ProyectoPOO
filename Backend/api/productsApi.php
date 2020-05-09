<?php
    header("Content-Type: application/json");

    include(__DIR__ . "/../classes/Product.php");
    require_once __DIR__ . "/../classes/Businesses.php";
    require_once(__DIR__ . "/../classes/Database.php");

    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){

        case 'GET': //Obtener
            if( isset($_GET['selfProducts']) ){
                if(isset($_COOKIE['key'])){
                    $tokenfromDb = Businesses::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
                    if($tokenfromDb == $_COOKIE['token']){
                        $businessOnline = new Business(Businesses::getBusinessFromKey($database->getDatabase(), $_COOKIE['key']));
                        echo json_encode($businessOnline->getProducts());
                    }
                }
            }
            elseif( isset($_GET["businessName"]) && isset($_GET["id"])){
                $businesses = new Businesses($database->getDatabase());
                $business = $businesses->getBusinessByName($_GET["businessName"]);
                echo json_encode($business->getProductOfBusinessByIndex($_GET["id"]));
            }
            elseif(isset($_GET["businessName"])){
                $businesses = new Businesses($database->getDatabase());
                $business = $businesses->getBusinessByName($_GET["businessName"]);
                echo json_encode($business->getBusinessProductsInSale());
                
            }
            else{
                $businesses = new Businesses($database->getDatabase());
                echo json_encode($businesses->getAllProductsInSale());
            }
            break;
            exit();

    }
