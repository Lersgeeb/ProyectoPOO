<?php

    class BranchOffice{
        private $branchOffice = [];
        private $key;

        public function __construct($branchOffice){
            $this->branchOffice = $branchOffice;
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
            return $this->branchOffice;
        }

        public function addBranchOffice($database, $businessKey){
            $result = $database     ->getReference('businesses/' . $businessKey . '/branchOffices')
                                    ->push($this->getData());
            
            echo $result->getkey();
        }

        public static function removeBranchOffice($database, $businessKey, $branchOfficeKey){

            $result = $database     ->getReference('businesses/' . $businessKey . '/branchOffices/' . $branchOfficeKey)
                                    ->set(null);
            return $result;
        }

    }