<?php

// variables
$db_server = '127.0.0.1';
$db_username = 'root';
$db_password = '';
$db_name = 'simpleAuth';

// db connect
$connection = mysqli_connect($db_server, $db_username, $db_password, $db_name);

// check status
if ($connection == null) {
    die('Connection failed.');
}


?>