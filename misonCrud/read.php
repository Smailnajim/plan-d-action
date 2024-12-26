<?php


$sql_query = "SELECT * FROM users ";

$result = $conect->query($sql_query);

echo $result;