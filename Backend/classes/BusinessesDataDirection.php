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
        return  $this->directionByEmail[$businessEmail];
    }

    public function getDirectionByName($businessName){
        return  $this->directionByName[$businessName];
    }
    
}


?>