<?php
    class User{
        private $firstname;
        private $lastName;
        private $userName;
        private $email;
        private $password;
        private $imageProfile;
        private $followBusinesses = [];
        private $productsLiked = [];
        private $cart = [];
        private $key;
        private $token;

        
        public function __construct( $user){
            $this->firstname = $user["firstname"];
            $this->lastName = $user["lastName"];
            $this->email = $user["email"];
            $this->password = $user["password"];
            $this->userName = $user["userName"];

            if(array_key_exists("imageProfile",$user))
                $this->imageProfile = $user["imageProfile"];
            if(array_key_exists("followBusinesses",$user))
                $this->followBusinesses = $user["followBusinesses"];
            if(array_key_exists("productsLiked",$user))
                $this->productsLiked = $user["productsLiked"];
            if(array_key_exists("cart",$user))
                $this->cart = $user["cart"];
        }

        


        /**
         * Get the value of firstname
         */ 
        public function getFirstname()
        {
                return $this->firstname;
        }

        /**
         * Set the value of firstname
         *
         * @return  self
         */ 
        public function setFirstname($firstname)
        {
                $this->firstname = $firstname;

                return $this;
        }

        /**
         * Get the value of lastName
         */ 
        public function getLastName()
        {
                return $this->lastName;
        }

        /**
         * Set the value of lastName
         *
         * @return  self
         */ 
        public function setLastName($lastName)
        {
                $this->lastName = $lastName;

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
         * Get the value of imageProfile
         */ 
        public function getImageProfile()
        {
                return $this->imageProfile;
        }

        /**
         * Set the value of imageProfile
         *
         * @return  self
         */ 
        public function setImageProfile($imageProfile)
        {
                $this->imageProfile = $imageProfile;

                return $this;
        }

        /**
         * Get the value of followBusinesses
         */ 
        public function getFollowBusinesses()
        {
                return $this->followBusinesses;
        }

        /**
         * Set the value of followBusinesses
         *
         * @return  self
         */ 
        public function setFollowBusinesses($followBusinesses)
        {
                $this->followBusinesses = $followBusinesses;

                return $this;
        }

        /**
         * Get the value of productsLiked
         */ 
        public function getProductsLiked()
        {
                return $this->productsLiked;
        }

        /**
         * Set the value of productsLiked
         *
         * @return  self
         */ 
        public function setProductsLiked($productsLiked)
        {
                $this->productsLiked = $productsLiked;

                return $this;
        }

        /**
         * Get the value of cart
         */ 
        public function getCart()
        {
                return $this->cart;
        }

        /**
         * Set the value of cart
         *
         * @return  self
         */ 
        public function setCart($cart)
        {
                $this->cart = $cart;

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
            $user = [];
            $user =  array(
                "firstname"=> $this->firstname,
                "lastName"=> $this->lastName,
                "userName"=> $this->userName,
                "email"=> $this->email,
                "password"=> $this->password, 
                "imageProfile"=> $this->imageProfile,
                "followBusinesses"=> $this->followBusinesses,
                "productsLiked"=> $this->productsLiked,
                "cart"=> $this->cart,
            );

            return $user;
        }

        public static function getUserFromKey($database,$key){
            $result = $database ->getReference('users/' . $key)
                                ->getSnapshot()
                                ->getValue();

            return $result;
        }

        public function addToken($database,$token){
            $this->token = $token;
            $result = $database ->getReference('users/' . $this->key . '/token')
                                ->set($token);

            return $result;
        }

        public static function removeToken($database,$key){
            $result = $database ->getReference('users/' . $key . '/token')
                                ->remove();

            return $result;
        }

        public static function changePathProfileImg($database, $userKey, $pathProfileImg){
                $result = $database     ->getReference('users/' . $userKey . '/imageProfile')
                                        ->set($pathProfileImg);
                
                return $result;
        }
    }