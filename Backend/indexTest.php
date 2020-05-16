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

echo sha1("password")
//console_log( $businesses->getData());
//console_log_values( $businesses->test());

//console_log( $businesses->authentication("jet@gmail.com","1234"));



?>
