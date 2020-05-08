<?php
    header("Content-Type: application/json");

    include(__DIR__ . "/../classes/Product.php");
    require_once __DIR__ . "/../classes/Businesses.php";
    require_once(__DIR__ . "/../classes/Database.php");

    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){

        case 'GET': //Obtener
            if(isset($_GET["id"])){
                
            }
            else{
                $businesses = new Businesses($database->getDatabase());
                echo json_encode($businesses->getAllProductsInSale());
            }
            break;
            exit();


    }
    