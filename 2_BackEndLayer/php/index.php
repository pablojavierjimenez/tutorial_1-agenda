<?php
    // Import DataBase Connection
    require_once("./db.php");

    $query = 'SELECT * FROM persons LIMIT 10';

    $result = GetRow($query);

    //var_dump($result);
    echo json_encode($result);
?>