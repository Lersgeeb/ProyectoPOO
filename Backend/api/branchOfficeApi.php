<?php
    header("Content-Type: application/json");

    include(__DIR__ . "/../classes/BranchOffice.php");
    require_once __DIR__ . "/../classes/Businesses.php";
    require_once(__DIR__ . "/../classes/Database.php");

    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':

            if(isset($_COOKIE['key'])){
                $tokenfromDb = Businesses::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
                if($tokenfromDb == $_COOKIE['token']){
                    $_POST = json_decode(file_get_contents('php://input'),true);
                    $newBranchOffice = [];
                    $newBranchOffice[] = $_POST["lat"];
                    $newBranchOffice[] = $_POST["lon"];
                    $branchOffice = new BranchOffice($newBranchOffice);
                    $branchOffice->addBranchOffice($database->getDatabase(),$_COOKIE['key']);
                }
            }
            
            break;
            exit();

        case 'DELETE':
            if(isset($_COOKIE['key'])){
                $tokenfromDb = Businesses::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
                if($tokenfromDb == $_COOKIE['token']){
                    if(isset($_GET['branchOfficeKey'])){
                        BranchOffice::removeBranchOffice( $database->getDatabase(), $_COOKIE['key'],$_GET['branchOfficeKey']);
                        echo "Sucursal Eliminada";
                    }
                }
            }
            break;
            exit();
            

                
            
            
    }