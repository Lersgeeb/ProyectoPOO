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

        public function saveBusiness($business){

            $hasName = $this->businessesDataDirection->getDirectionByName($business->getBusinessName());
            $hasEmail = $this->businessesDataDirection->getDirectionByEmail($business->getEmail());

            if($hasEmail || $hasName)
                return false;
            else{
                $result = $this->database   ->getReference('businesses')
                                            ->push($business->getData());
                return $business->getData();
            }
            
        }

        public function getBusinessByName($businessName){
            $indexBusiness = $this->businessesDataDirection->getDirectionByName($businessName);
            return $this->businesses[$indexBusiness];
        } 

        public function getAllProductsInSale(){
            $allProductsInSale = [];
            foreach($this->businesses as $business) {
                $productsInSaleOfBusiness = $business->getBusinessProductsInSale();
                if( !empty($productsInSaleOfBusiness) ){
                    foreach($productsInSaleOfBusiness as $key=>$productInSale){
                        $allProductsInSale[$key] = $productInSale;
                    }
                }
            }     

            return $allProductsInSale;
        }



    }

?>