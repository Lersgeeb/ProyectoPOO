<?php
    
    include_once('BusinessesDataDirection.php');
    include_once('Business.php');
    
    
    class Businesses {

        private $filename;
        private $businesses = [];
        private $businessesDataDirection;


        public function __construct($filename){
            $this->filename = $filename;
            $businessesArray = json_decode(file_get_contents($filename), true);
            $this->businessesDataDirection = new BusinessesDataDirection();

            foreach($businessesArray as $business) {     
                $this->businesses[] = new Business(
                    $business["businessName"],
                    $business["profileImg"],
                    $business["bannerImg"],
                    $business["email"],
                    $business["password"],
                    $business["plan"],
                    $business["cardNumber"],
                    $business["expiration"],
                    $business["cvv"],
                    $business["branchOffices"],
                    $business["country"],
                    $business["products"]
                );
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
     
        public function test(){
            return $this->businessesDataDirection->getDirectionByEmail("diunsa@gmail.com");
        }
    }

?>