<?php 
    // define sesstion
    session_start();

    // include database
    require_once './assets/includes/config.php'; 

    // include functions
    require_once './assets/includes/functions.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- meta tags -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- title & icon -->
    <title>simpleDept - <?= $page_title ?></title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="favicon.png">

    <!-- css links -->
    <link rel="stylesheet" href="./assets/css/output.css">
    <link rel="stylesheet" href="./assets/css/app.css">
</head>