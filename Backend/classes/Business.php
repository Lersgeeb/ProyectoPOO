<?php
    class Business{

        private $businessName;
        private $profileImg;
        private $bannerImg;
        private $email;
        private $password;
        private $plan;
        private $cardNumber;
        private $expiration;
        private $cvv;
        private $branchOffices;
        private $country;
        private $products;
    
        public function __construct(
            $businessName,
            $profileImg,
            $bannerImg,
            $email,
            $password,
            $plan,
            $cardNumber,
            $expiration,
            $cvv,
            $branchOffices, 
            $country,
            $products
        ){
            
            $this->businessName = $businessName;
            $this->profileImg = $profileImg;
            $this->bannerImg = $bannerImg;
            $this->email = $email;
            $this->password = $password;
            $this->plan = $plan;
            $this->cardNumber = $cardNumber;
            $this->expiration = $expiration;
            $this->cvv = $cvv;
            $this->branchOffices = $branchOffices;
            $this->country = $country;
            $this->products = $products;
        }


            /**
             * Get the value of businessName
             */ 
            public function gebBusinessName()
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
            public function getProducts()
            {
                        return $this->products;
            }

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
                    "products"=> $this->products 
            );

            return $business;

            }
    }

?>