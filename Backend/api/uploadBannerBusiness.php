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
                            $path = '../../Frontend/img/imgBusinessBanner/'. $_POST['nameFile'] . '.jpg';
                            move_uploaded_file($tempFilePath, $path);
                            $newPath = '../img/imgBusinessBanner/'. $_POST['nameFile'] . '.jpg';
                            Business::changePathBannerImg($database->getDatabase(), $_COOKIE['key'], $newPath);
                            echo $newPath;
                        }
        
        
                    }

                }
            }
    }

?>