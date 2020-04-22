<?php
    require_once __DIR__ . '/../vendor/autoload.php';
    use Kreait\Firebase\Factory;

    class Database{
        private $keyFile = '../secret/fir-php-test-49dba-6c01d748532f.json';
        private $url = 'https://fir-php-test-49dba.firebaseio.com';
        private $db;

        public function __construct(){
            $factory = (new Factory)
                ->withServiceAccount($this->keyFile)
                ->withDatabaseUri($this->url);
            $this->db = $factory->createDatabase();
        }

        public function getDatabase(){
            return $this->db;
        }
    }

   