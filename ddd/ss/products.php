<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    $jsonContent = file_get_contents('products.json');

    echo $jsonContent;
?>
