<?php
class UsersDataDirection{

    private $directionByEmail;
    
    
    
    public function __construct(){
        $this->countUsers = 0;
        $this->directionByEmail = array();
    }

    public function getDirectionByEmail($userEmail){
        $hasEmail = array_key_exists($userEmail,$this->directionByEmail);
        if($hasEmail)
            return  $this->directionByEmail[$userEmail];
    }

    

    public function saveDataDirection($business){
        $this->directionByEmail[$business["email"]] =  $this->countUsers;
        $this->countUsers++; 
    }
    
}


?>