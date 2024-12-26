<?php



// $name = $_POST['nom'];
// $grade = $_POST['role'];
// $marks =  $_POST['note'];

// $name = ;
// $grade = ;
// $marks =  ;

function creat ($nom, $last, $gmail, $pass){
    $sql = "INSERT INTO users ('firstName', 'lastName', 'email', 'password') VALUES (`$nom`, `$last`, `$gmail`, `$pass`)";
    $sende = mysqli_query($conect, $sql);
}

creat ("ahmed", 'lastName', 'email@gmail.com', 'pass10');