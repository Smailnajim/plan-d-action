<?php
    include "feedback.php";

    $name = $_POST['name'];
    $message = $_POST['message'];
    echo $name . " " . $message . "</br>";

    $insertToDb = new feedback($name, $message);
    $insertToDb->create();



    
