<?php
    include_once('BranchOffice.php');
    class BranchOffices{
        private $branchOffices = [];

        public function __construct($branchOffices){
            if($branchOffices){
                foreach($branchOffices as $key=>$branchOffice){
                    $newBranchOffice = new BranchOffice($branchOffice);
                    $newBranchOffice->setKey($key);
                    $this->branchOffices[] = $newBranchOffice;
                }
            }
        }

        public function getData(){
            $branchOfficesDecoded = [];
            foreach($this->branchOffices as $branchOffice) {
                $branchOfficesDecoded[$branchOffice->getKey()] = $branchOffice->getData();
            }
            return $branchOfficesDecoded;
        }

      
    }