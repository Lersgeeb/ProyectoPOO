<?php
    header("Content-Type: application/json");

    
    require_once __DIR__ . "/../classes/Users.php";
    require_once __DIR__ . "/../classes/User.php";
    require_once(__DIR__ . "/../classes/Database.php");

    $database = new Database();
    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':

            if(isset($_COOKIE['key'])){
                $tokenfromDb = Users::getTokenFromKey($database->getDatabase(), $_COOKIE['key']);
                if($tokenfromDb == $_COOKIE['token']){
                    if(isset($_FILES["image"])){
                        $name = $_FILES["image"]["name"];
                        $tempFilePath = $_FILES["image"]["tmp_name"];

                        if($name && $tempFilePath){
                            $path = '../../Frontend/img/imgUserProfile/'. $_POST['nameFile'] . '.jpg';
                            move_uploaded_file($tempFilePath, $path);
                            $newPath = '../img/imgUserProfile/'. $_POST['nameFile'] . '.jpg';
                            User::changePathProfileImg($database->getDatabase(), $_COOKIE['key'], $newPath);
                            echo $newPath;
                        }
        
        
                    }

                }
            }
    }

?>