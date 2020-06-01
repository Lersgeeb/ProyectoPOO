<?php

    class Product{

        private $category;
        private $price;
        private $description;
        private $from;
        private $urlImg;
        private $inSale;
        private $key;
        private $branchesOffices;
        /*private $sale;
        private $rate;
        private $rateQuant;
        private $duration;*/
        
        public function __construct($product){
            $this->category = $product["category"];
            $this->price = $product["price"];
            $this->description = $product["description"];
            $this->from = $product["from"];
            $this->urlImg = $product["urlImg"];

            if(array_key_exists("inSale",$product))
                $this->inSale = $product["inSale"];
            
            if(array_key_exists("branchesOffices",$product))
                $this->branchesOffices = $product["branchesOffices"];
        }

        


        /**
         * Get the value of category
         */ 
        public function getCategory()
        {
                return $this->category;
        }

        /**
         * Set the value of category
         *
         * @return  self
         */ 
        public function setCategory($category)
        {
                $this->category = $category;

                return $this;
        }

        /**
         * Get the value of price
         */ 
        public function getPrice()
        {
                return $this->price;
        }

        /**
         * Set the value of price
         *
         * @return  self
         */ 
        public function setPrice($price)
        {
                $this->price = $price;

                return $this;
        }

        /**
         * Get the value of description
         */ 
        public function getDescription()
        {
                return $this->description;
        }

        /**
         * Set the value of description
         *
         * @return  self
         */ 
        public function setDescription($description)
        {
                $this->description = $description;

                return $this;
        }

        /**
         * Get the value of from
         */ 
        public function getFrom()
        {
                return $this->from;
        }

        /**
         * Set the value of from
         *
         * @return  self
         */ 
        public function setFrom($from)
        {
                $this->from = $from;

                return $this;
        }

        /**
         * Get the value of urlImg
         */ 
        public function getUrlImg()
        {
                return $this->urlImg;
        }

        /**
         * Set the value of urlImg
         *
         * @return  self
         */ 
        public function setUrlImg($urlImg)
        {
                $this->urlImg = $urlImg;

                return $this;
        }

        /**
         * Get the value of inSale
         */ 
        public function getInSale()
        {
                return $this->inSale;
        }

        /**
         * Set the value of inSale
         *
         * @return  self
         */ 
        public function setInSale($inSale)
        {
                $this->inSale = $inSale;

                return $this;
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
                $product = array(
                        "category" => $this->category,
                        "price" => $this->price,
                        "description" => $this->description,
                        "from" => $this->from,
                        "urlImg" => $this->urlImg,
                        "inSale" => $this->inSale,
                        "branchesOffices" => $this->branchesOffices
                );

            return $product;
        }


        public static function getProductByKey($database, $businessKey, $productkey){
                $result = $database ->getReference('businesses/' . $businessKey . '/products/' . $productkey )
                                    ->getSnapshot()
                                    ->getValue();
    
                echo json_encode($result);
        }

        public static function addSaleOnProduct($database, $businessKey, $productkey, $sale){

                $result = $database     ->getReference('businesses/' . $businessKey . '/products/' . $productkey . '/inSale')
                                        ->set($sale);
                                    
                //echo json_encode($sale);
                //echo json_encode($key);

                return $result;
        }

        public static function removeSaleOnProduct($database, $businessKey, $productkey){
                $result = $database     ->getReference('businesses/' . $businessKey . '/products/' . $productkey . '/inSale')
                                        ->set(null);
                return $result;
        }

        public static function removeProduct($database, $businessKey, $productkey){
                $result = $database     ->getReference('businesses/' . $businessKey . '/products/' . $productkey)
                                        ->set(null);
                return $result;
        }
            

        public function isInSale(){
            return !empty($this->inSale);
        }

        public static function addBranchOffice($database, $businessKey, $productkey, $branchKey){
                $result = $database     ->getReference('businesses/' . $businessKey . '/products/' . $productkey .'/branchesOffices')
                                        ->push($branchKey);
                return $result;
        }

        public static function removeBranchOffice($database, $businessKey, $productkey, $branchProductKey){
                $result = $database     ->getReference('businesses/' . $businessKey . '/products/' . $productkey .'/branchesOffices/' . $branchProductKey)
                                        ->set(null);
                return $result;
        }

        


      
    }