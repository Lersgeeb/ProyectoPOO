<?php
    include_once('Products.php');
    class Business{

        private $businessName;
        private $email;
        private $password;
        private $plan;
        private $country;
        private $cardNumber;
        private $expiration;
        private $cvv;
        private $branchOffices = [];
        private $profileImg = "../img/SubBusiness/defaultProfile.jpg";
        private $bannerImg = "../img/SubBusiness/defaultBanner.jpg";
        private $products;
        private $key;
        private $token;
    
        public function __construct($business){
            
            $this->businessName = $business["businessName"];
            $this->email = $business["email"];
            $this->password = $business["password"];
            $this->plan = $business["plan"];
            $this->cardNumber = $business["cardNumber"];
            $this->expiration = $business["expiration"];
            $this->cvv = $business["cvv"];
            $this->country = $business["country"];
            
            if(array_key_exists("branchOffices",$business))
                $this->branchOffices = $business["branchOffices"];
            if(array_key_exists("profileImg",$business))
                $this->profileImg = $business["profileImg"];
            if(array_key_exists("bannerImg",$business))
                $this->bannerImg = $business["bannerImg"];
            if(array_key_exists("products",$business))
                $this->products = new Products($business["products"]); 
              
        }


            /**
             * Get the value of businessName
             */ 
            public function getBusinessName()
            {
                        return $this->businessName;
            }

            /**
             * Set the value of businessName
             *
             * @return  self
             */ 
            public function sebBusinessName($businessName)
            {
                        $this->businessName = $businessName;

                        return $this;
            }

            /**
             * Get the value of profileImg
             */ 
            public function getProfileImg()
            {
                        return $this->profileImg;
            }

            /**
             * Set the value of profileImg
             *
             * @return  self
             */ 
            public function setProfileImg($profileImg)
            {
                        $this->profileImg = $profileImg;

                        return $this;
            }

            /**
             * Get the value of bannerImg
             */ 
            public function getBannerImg()
            {
                        return $this->bannerImg;
            }

            /**
             * Set the value of bannerImg
             *
             * @return  self
             */ 
            public function setBannerImg($bannerImg)
            {
                        $this->bannerImg = $bannerImg;

                        return $this;
            }

            /**
             * Get the value of email
             */ 
            public function getEmail()
            {
                        return $this->email;
            }

            /**
             * Set the value of email
             *
             * @return  self
             */ 
            public function setEmail($email)
            {
                        $this->email = $email;

                        return $this;
            }

            /**
             * Get the value of password
             */ 
            public function getPassword()
            {
                        return $this->password;
            }

            /**
             * Set the value of password
             *
             * @return  self
             */ 
            public function setPassword($password)
            {
                        $this->password = $password;

                        return $this;
            }

            /**
             * Get the value of plan
             */ 
            public function getPlan()
            {
                        return $this->plan;
            }

            /**
             * Set the value of plan
             *
             * @return  self
             */ 
            public function setPlan($plan)
            {
                        $this->plan = $plan;

                        return $this;
            }

            /**
             * Get the value of cardNumber
             */ 
            public function getCardNumber()
            {
                        return $this->cardNumber;
            }

            /**
             * Set the value of cardNumber
             *
             * @return  self
             */ 
            public function setCardNumber($cardNumber)
            {
                        $this->cardNumber = $cardNumber;

                        return $this;
            }

            /**
             * Get the value of expiration
             */ 
            public function getExpiration()
            {
                        return $this->expiration;
            }

            /**
             * Set the value of expiration
             *
             * @return  self
             */ 
            public function setExpiration($expiration)
            {
                        $this->expiration = $expiration;

                        return $this;
            }

            /**
             * Get the value of cvv
             */ 
            public function getCvv()
            {
                        return $this->cvv;
            }

            /**
             * Set the value of cvv
             *
             * @return  self
             */ 
            public function setCvv($cvv)
            {
                        $this->cvv = $cvv;

                        return $this;
            }

            /**
             * Get the value of branchOffices
             */ 
            public function getBranchOffices()
            {
                        return $this->branchOffices;
            }

            /**
             * Set the value of branchOffices
             *
             * @return  self
             */ 
            public function setBranchOffices($branchOffices)
            {
                        $this->branchOffices = $branchOffices;

                        return $this;
            }

            /**
             * Get the value of country
             */ 
            public function getCountry()
            {
                        return $this->country;
            }

            /**
             * Set the value of country
             *
             * @return  self
             */ 
            public function setCountry($country)
            {
                        $this->country = $country;

                        return $this;
            }

            /**
             * Get the value of products
             */ 

            /**
             * Set the value of products
             *
             * @return  self
             */ 
            public function setProducts($products)
            {
                        $this->products = $products;

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
                $business = [];
                $business =  array(
                    "businessName"=> $this->businessName,
                    "profileImg"=> $this->profileImg,
                    "bannerImg"=> $this->bannerImg,
                    "email"=> $this->email, 
                    "password"=> $this->password,
                    "plan"=> $this->plan,
                    "cardNumber"=> $this->cardNumber,
                    "expiration"=> $this->expiration ,
                    "cvv"=> $this->cvv,
                    "branchOffices"=> $this->branchOffices,
                    "country"=> $this->country,
            );
            if($this->products){
                $business["products"] = $this->products->getData();
            }

            return $business;

        }


        public static function getbusinessFromKey($database,$key){
            $result = $database ->getReference('businesses/' . $key)
                                ->getSnapshot()
                                ->getValue();

            return $result;
        }

        public function addToken($database,$token){
            $this->token = $token;
            $result = $database ->getReference('businesses/' . $this->key . '/token')
                                ->set($token);

            return $result;
        }

        public static function removeToken($database,$key){
            $result = $database ->getReference('businesses/' . $key . '/token')
                                ->remove();

            return $result;
        }


        public function getBusinessProductsInSale(){
            if($this->products)
                return $this->products->getProductsInSale();
        }

        public function getProducts(){
            if($this->products)
             return $this->products->getData();
        }

        public function getProductOfBusinessByIndex($index){
            if($this->products)
             return $this->products->getProductByIndex($index);
        }



      

        
    }

?>