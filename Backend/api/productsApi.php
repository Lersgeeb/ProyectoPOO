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
            else if(isset( $_GET['productKey'] )){
                if(isset($_COOKIE['key'])){
                    $tokenfromDb = Businesses::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
                    if($tokenfromDb == $_COOKIE['token']){
                        if( isset($_GET['productKey']) ){
                            Product::getProductByKey( $database->getDatabase(), $_COOKIE['key'],$_GET['productKey']);
                        }
                    }
                }
            }
            elseif( isset($_GET["businessName"]) && isset($_GET["id"])){
                $businesses = new Businesses($database->getDatabase());
                $business = $businesses->getBusinessByName($_GET["businessName"]);
                echo json_encode($business->getProductOfBusinessById($_GET["id"]));
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

        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);
            $businesses = new Businesses($database->getDatabase());
            $business = $businesses->getBusinessByName($_POST['from']);
            $result = $business->addProduct($_POST,$database->getDatabase());
            echo $result;    
            
            break;
            exit();

        case 'PUT':
            if(isset($_COOKIE['key'])){
                $_PUT = json_decode(file_get_contents('php://input'),true);
                $tokenfromDb = Businesses::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
                if($tokenfromDb == $_COOKIE['token']){
                    if(isset($_PUT['branchKey']) && $_PUT['productKey']){
                        $response = Product::addBranchOffice($database->getDatabase(), $_COOKIE['key'], $_PUT['productKey'], $_PUT['branchKey']);
                        echo true;

                    }
                    else{
                        $sale = Product::addSaleOnProduct( $database->getDatabase(), $_COOKIE['key'],$_PUT['productKey'],$_PUT['inSale']);
                        if($sale)
                            echo "Producto puesto en Oferta";
                    }
                    
                }
            }
            break;
            exit();

        case 'DELETE':
            if(isset($_COOKIE['key'])){
                $tokenfromDb = Businesses::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
                if($tokenfromDb == $_COOKIE['token']){
                    if(isset($_GET['inSale']) && isset($_GET['productKey'])){
                        Product::removeSaleOnProduct( $database->getDatabase(), $_COOKIE['key'],$_GET['productKey']);
                        echo "Oferta Eliminada";
                    }
                    elseif( isset($_GET['productKey']) && isset($_GET['branchProductKey']) ){
                        Product::removeBranchOffice( $database->getDatabase(), $_COOKIE['key'],$_GET['productKey'],$_GET['branchProductKey']);
                        echo true;
                    }
                    elseif( isset($_GET['productKey']) ){
                        Product::removeProduct( $database->getDatabase(), $_COOKIE['key'],$_GET['productKey']);
                        echo "Producto Eliminado";
                    }
                }
            }
            break;
            exit();
            

                
            
            
    }
