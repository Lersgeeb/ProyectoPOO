<?php

    class Cart{
        private $businessName;
        private $productIndex;
        private $quant;
        private $key;

        public function __construct($businessName, $productIndex , $quant ){
            $this->businessName = $businessName;
            $this->productIndex = $productIndex;
            $this->quant = $quant;
        }

        /**
         * Get the value of key
         */ 
        public function getKey()
        {
                return $this->key;
        }

        /**
         * Set the value of key
         *
         * @return  self
         */ 
        public function setKey($key)
        {
                $this->key = $key;

                return $this;
        }

        
        public function getData(){
            return array(
                "businessName" => $this->businessName,
                "productIndex" => $this->productIndex,
                "quant" => $this->quant
            );
        }

        public function addProductOnCart($database, $userKey){
            $result = $database     ->getReference('users/' . $userKey . '/cart')
                                    ->push($this->getData());
            
            echo $result->getkey();
        }

        public static function removeProductOnCart($database, $userKey, $cartProcuctKey){

            $result = $database     ->getReference('users/' . $userKey . '/cart/' . $cartProcuctKey)
                                    ->set(null);
            return $result;
        }

    }