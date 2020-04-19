<?php
include_once('./classes/Business.php');
include_once('./classes/Businesses.php');

function console_log( $data ){
    echo '<script>';
    echo 'console.log('. json_encode( $data ) .')';
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

console_log( $business->getData() );

$businesses = new Businesses("./data/businesses.json");
console_log( $businesses->getBusinesses());


/*
"Jetstereo",
"../img/businessPage/logo1.png",
"../img/businessPage/banner1.jpg",
"jet@gmail.com",
1234,
"Plan Empresarial",
"1234567891234567",
"12/2020",
"190",
"22",
"Honduras",
"Products" 


$businessName = "Jetstereo";
$profileImg = "../img/businessPage/logo1.png";
$bannerImg = "../img/businessPage/banner1.jpg";
$email = "jet@gmail.com";
$password = 1234;
$plan = "Plan Empresarial";
$cardNumber = "1234567891234567";
$expiration = "12/2020";
$cvv = "190";
$branchOffices[] = array(14.087338, -87.183140);
$country = array();
$products


$country["name"] = "Honduras";
$country["lat"] = 15;
$country["lon"] = -86.5;
*/



?>
