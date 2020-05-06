<?php
    // Import DataBase Connection
    require_once("./db.php");

    $query = 'SELECT * FROM agenda';

    $result = GetRow($query);

    var_dump($result);
?>