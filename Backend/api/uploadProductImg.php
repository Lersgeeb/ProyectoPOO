<?php
    header("Content-Type: application/json");

    include(__DIR__ . "/../classes/BranchOffice.php");
    require_once __DIR__ . "/../classes/Businesses.php";
    require_once __DIR__ . "/../classes/Business.php";
    require_once(__DIR__ . "/../classes/Database.php");

    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':

            if(isset($_COOKIE['key'])){
                $tokenfromDb = Businesses::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
                if($tokenfromDb == $_COOKIE['token']){
                    if(isset($_FILES["image"])){
                        $name = $_FILES["image"]["name"];
                        $tempFilePath = $_FILES["image"]["tmp_name"];

                        if($name && $tempFilePath){
                            
                            $pathFolder = '../../Frontend/img/imgProducts/'. $_POST['businessName'];
                            $newPath = $pathFolder . '/' . $_POST['filename'] . '.jpg';
                            $copiedIMG = false;

                            if( !file_exists($pathFolder) ){
                                mkdir($pathFolder,0777,true);
                            }

                            if( move_uploaded_file($tempFilePath, $newPath)){
                                $copiedIMG = true;
                            }

                            if($copiedIMG){
                                $frontendPath = '../img/imgProducts/'. $_POST['businessName'] . '/' . $_POST['filename'] . '.jpg';
                                Business::createProductImg($database->getDatabase(), $_COOKIE['key'], $_POST['productKey'], $frontendPath);
                                
                                echo $frontendPath;
                            }
                        }
        
        
                    }

                }
            }
    }

?>