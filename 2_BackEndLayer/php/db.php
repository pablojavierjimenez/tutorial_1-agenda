<?php 

$server = "127.0.0.1";
$user = "root";
$password = "";
$database = "agendaDB";
$port = "3306";

// Create a connection
$connection =  new mysqli($server, $user, $password, $database, $port);

// Check error
if($connection -> connect_error) {
    die($connection->connection_error);
}

// Crear, Update, Delete
function NonQuery ($sqlString, &$connection = null) {
    if(!$connection) global $connection;
    $result = $connection->query($sqlString);
    return $connection -> affected_rows;
}

/**
 * Undocumented function
 *
 * @param [String] $sqlString
 * @param [Object] $connection
 * @return void
 */
function GetRow ($sqlString, &$connection = null) {

    if(!$connection) global $connection;

    $data = $connection->query($sqlString);
    $resultArray = array();

    foreach( $data as $item ){
        $resultArray[] = $item;
    }

    return $resultArray;
}
?>