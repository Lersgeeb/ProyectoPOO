<?php
class BusinessesDataDirection{

    private $directionByEmail;
    private $directionByName;
    
    
    public function __construct(){
        $this->countBusinesses = 0;
        $this->directionByEmail = array();
        $this->directionByName = array();
    }

    public function saveDataDirection($business){
        $this->directionByEmail[$business["email"]] =  $this->countBusinesses;
        $this->directionByName[$business["businessName"]] =  $this->countBusinesses;
        $this->countBusinesses++; 
    }

    public function getDirectionByEmail($businessEmail){
        $hasEmail = array_key_exists($businessEmail,$this->directionByEmail);
        if($hasEmail)
            return  $this->directionByEmail[$businessEmail];
    }

    public function getDirectionByName($businessName){
        $hasName = array_key_exists($businessName,$this->directionByName);
        if($hasName)
            return  $this->directionByName[$businessName];
    }
    
}


?>