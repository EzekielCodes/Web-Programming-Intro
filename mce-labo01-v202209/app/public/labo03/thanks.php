<?php
    session_start();
    $name = isset($_SESSION['name']) ? (string) $_SESSION['name'] : '';

    ?><!doctype html>
    <html>
    <head>
        <title>Testform</title>
        <meta charset="UTF-8" />
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <title> Bedankt </title>
    </head>

    <body>
        <h1>Bedankt</h1>
        <p> Bedankt voor jouw registratie , <?php echo $name; ?></p>  
    </body>
