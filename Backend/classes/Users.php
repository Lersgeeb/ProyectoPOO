<?php

    include_once('UsersDataDirection.php');
    include_once('User.php');
    include_once('Database.php');

    class Users{
        private $database;
        private $users = [];
        private $usersDataDirection;

        public function __construct($database){
            $this->database = $database;
            $usersArray =  $this->database  ->getReference("users")
                                            ->getSnapshot()
                                            ->getValue();

            $this->usersDataDirection = new UsersDataDirection();

            if($usersArray){
                foreach($usersArray as $key=>$user) {     
                    $userObj = new User($user);
                    $userObj->setKey($key);
                    $this->users[] = $userObj;
                    $this->usersDataDirection->saveDataDirection($user);
                } 
            }
                      
        }

        public function getData(){
            $usersDecoded = [];
            foreach($this->users as $user) {
                $usersDecoded[] = $user->getData();
            }
            return $usersDecoded;
        }

        public static function getDataFromDb($database){
            $users = $database ->getReference('users')
                                    ->getSnapshot()
                                    ->getValue();

            return $users;
        }

        public function authentication($emailValue, $passwordValue){
            $index = $this->usersDataDirection->getDirectionByEmail($emailValue);
            $user = $this->users[$index];
            if($user){
                if($user->getPassword() == $passwordValue){
                    $token = bin2hex(openssl_random_pseudo_bytes(16));
                    $user->addToken($this->database, $token);
                    setcookie("token", $token, time() + (86400 * 30), "/");
                    setcookie("key", $user->getKey(), time() + (86400 * 30), "/");
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
            $token = $database  ->getReference('users')
                                ->getChild($key)
                                ->getChild('token')
                                ->getValue();

            return $token;
        }

        public static function getUserFromKey($database, $key){

            $user = $database   ->getReference('users')
                                    ->getChild($key)
                                    ->getValue();
            return $user;
        }

        public function saveUser($user){

            
            $hasEmail = $this->usersDataDirection->getDirectionByEmail($user->getEmail());

            if($hasEmail)
                return false;
            else{
                $result = $this->database   ->getReference('users')
                                            ->push($user->getData());
                return $user->getData();
            }
            
        }


    }