<?php
    include_once('Product.php');
    class Products{
        private $products = [];

        public function __construct($products){
            if($products){
                foreach($products as $key=>$product){
                    $newProduct = new Product($product);
                    $newProduct->setKey($key);
                    $this->products[] = $newProduct;
                }
            }
        }

        public function getData(){
            $productsDecoded = [];
            foreach($this->products as $product) {
                $productsDecoded[$product->getKey()] = $product->getData();
            }
            return $productsDecoded;
        }

        public function getProductsInSale(){
            $productsInSale = [];
            if( !empty($this->products) ){
                foreach($this->products as $product){
                    if( $product->isInsale() ){
                        $productsInSale[$product->getKey()] = $product->getData();
                    }
                }
            }
            
            return $productsInSale;

        }

        public function getProductByIndex($index){
            return $this->products[$index]->getData();
        }

        public function getProductByKey($key){
            foreach($this->products as $product){
                if( $product->getKey() == $key ){
                    return array(
                        $key => $product->getData()
                    );
                }
            }
        }


        public function createProduct($product,$database,$key){
            $newProduct = new Product($product);
            $this->products[] = $product;
            $result = $database ->getReference('businesses/' . $key . '/products')
                                ->push($newProduct->getData());
                                
            if($result->getKey())
                return $result->getKey();
        }
    }