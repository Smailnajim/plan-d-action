<?php
    include "feedback.php";

    $insertToDb = new feedback($name, $message);
    $insertToDb->getAll();