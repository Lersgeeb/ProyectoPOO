<?php
    include_once('Product.php');
    class Products{
        private $products = [];

        public function __construct($products){
            foreach($products as $product){
                $this->products[] = new Product($product);
            }
        }

        public function getData(){
            $productsDecoded = [];
            foreach($this->products as $product) {
                $productsDecoded[] = $product->getData();
            }
            return $productsDecoded;
        }

        public function getProductsInSale(){
            $productsInSale = [];
            if( !empty($this->products) ){
                foreach($this->products as $product){
                    if( $product->isInsale() ){
                        $productsInSale[] = $product->getData();
                    }
                }
            }
            
            return $productsInSale;

        }
    }