<?php
    class Businesses{

        private $businesses;

        public function __construct($filename){
            $this->businesses = json_decode(file_get_contents($filename), true);
        }

        /**
         * Get the value of businesses
         */ 
        public function getBusinesses()
        {
                return $this->businesses;
        }
    }

?>