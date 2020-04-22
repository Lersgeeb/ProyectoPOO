<?php
    
    include_once('BusinessesDataDirection.php');
    include_once('Business.php');
    
    
    class Businesses {

        private $database;
        private $businesses = [];
        private $businessesDataDirection;


        public function __construct($database){
            $this->database = $database;
            $businessesArray =  $this->$database->getReference('businesses')
                                                ->getSnapshot()
                                                ->getValue();

            $this->businessesDataDirection = new BusinessesDataDirection();

            foreach($businessesArray as $key=>$business) {     
                $this->businesses[] = new Business($business);
                $this->businessesDataDirection->saveDataDirection($business);
            }            
        }

        public function getData(){
            $businessesDecoded = [];
            foreach($this->businesses as $business) {
                $businessesDecoded[] = $business->getData();
            }
            return $businessesDecoded;
        }

        public function authentication($emailValue, $passwordValue){
            $index = $this->businessesDataDirection->getDirectionByEmail($emailValue);
            if($this->businesses[$index]){
                if($this->businesses[$index]->getPassword() == $passwordValue)
                    return $this->businesses[$index]->getData();
                else
                    return "Contraseña Incorrecta";
            }
            else{
                return "Usuario no encontrado";
            }


        }

        public function saveBusiness($business){

        }
     
        public function test(){
            return $this->businessesDataDirection->getDirectionByEmail("diunsa@gmail.com");
        }
    }

?>