<?php
    
    include_once('BusinessesDataDirection.php');
    include_once('Business.php');
    include_once('Database.php');
    
    
    class Businesses {

        private $database;
        private $businesses = [];
        private $businessesDataDirection;


        public function __construct($database){
            $this->database = $database;
            $businessesArray =  $this->database->getReference("businesses")
                                                ->getSnapshot()
                                                ->getValue();

            $this->businessesDataDirection = new BusinessesDataDirection();

            foreach($businessesArray as $key=>$business) {     
                $businessObj = new Business($business);
                $businessObj->setKey($key);
                $this->businesses[] = $businessObj;
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

        public static function getDataFromDb($database){
            $businesses = $database ->getReference('businesses')
                                    ->getSnapshot()
                                    ->getValue();

            return $businesses;
        }

        public function authentication($emailValue, $passwordValue){
            $index = $this->businessesDataDirection->getDirectionByEmail($emailValue);
            $business = $this->businesses[$index];
            if($business){
                if($business->getPassword() == $passwordValue){
                    $token = bin2hex(openssl_random_pseudo_bytes(16));
                    $business->addToken($this->database, $token);
                    setcookie("token", $token, time() + (86400 * 30), "/");
                    setcookie("key", $business->getKey(), time() + (86400 * 30), "/");
                    return true;
                }
                else
                    return false;
            }
            else{
                return false;
            }
        }

        public static function getTokenFromKey($database, $key){
            $token = $database  ->getReference('businesses')
                                ->getChild($key)
                                ->getChild('token')
                                ->getValue();

            return $token;
        }

        public static function getBusinessFromKey($database, $key){
            $business = $database   ->getReference('businesses')
                                    ->getChild($key)
                                    ->getValue();
            return $business;
        }

        
     
        public function test(){
            return $this->businessesDataDirection->getDirectionByEmail("diunsa@gmail.com");
        }
    }

?>