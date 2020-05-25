<?php
    if(isset($_FILES["image"])){
        $name = $_FILES["image"]["name"];
        $tempFilePath = $_FILES["image"]["tmp_name"];

        move_uploaded_file($tempFilePath,'../../Frontend/img/imgBusiness/'. $_POST['nameFile']);
        echo 'img/imgBusiness/'. $_POST['nameFile'];

    }
    
    /*
lastModified: 1590421750863
lastModifiedDate: Mon May 25 2020 09:49:10 GMT-0600 (hora estándar central) {}
name: "c75601cf4b798b9bb038a5b73c93d358_XL.jpg"
size: 415608
type: "image/jpeg"
webkitRelativePath*/


?>