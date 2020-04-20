<?php
include_once('./classes/Business.php');
include_once('./classes/Businesses.php');

function console_log( $data ){
    echo '<script>';
    echo 'console.log('. json_encode( $data ) .')';
    echo '</script>';
};

function console_log_values( $data ){
    echo '<script>';
    echo 'console.log('. $data .')';
    echo '</script>';
};

$content = json_decode(file_get_contents("./data/exampleData.json"), true) ;

$business = new Business(
    $content["businessName"],
    $content["profileImg"],
    $content["bannerImg"],
    $content["email"],
    $content["password"],
    $content["plan"],
    $content["cardNumber"],
    $content["expiration"],
    $content["cvv"],
    $content["branchOffices"],
    $content["country"],
    $content["products"]
);

//console_log( $business->getData() );

$businesses = new Businesses("./data/businesses.json");
//console_log( $businesses->getData());
//console_log_values( $businesses->test());

console_log( $businesses->authentication("jet@gmail.com","1234"));



?>
