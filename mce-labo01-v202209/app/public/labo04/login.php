<?php

    session_start();

    if (isset($_SESSION['user'])) {
		header('location: index.php');
		exit();
	}
    //wachtwoord Azerty123(voor docent om te testen)
    $encrypted = '$2y$10$YrY3/m/ry/hGAhVEcfWPrOgQgv.nO/nxSXJLP4vQP..stPK/2uSzC';
    $username = isset($_POST['username']) ? trim($_POST['username']) : '';
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';
    $formErrors = [];
    if (isset($_POST['moduleAction']) && ($_POST['moduleAction'] == 'login')) {


    if(strlen(trim($username)) === 0){
        $formErrors[] = "Gelieve een username in te vullen";
    }

    if(strlen(trim($password)) === 0){
        $formErrors[] = "Gelieve een wachtwoord in te vullen";
    }

    if (password_verify($password, $encrypted)){
        $_SESSION['user'] = $username;
        header('location: index.php');
		exit();
    }

    } 


?><!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mijn takenlijst</title>
    <!-- Fonts -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>
    <!-- Styles -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/tasks.css" rel="stylesheet">
</head>
<body id="app-layout">
<nav class="navbar navbar-default">
    <div class="container">
        <div class="navbar-header"><!-- Just an image -->
            <a class="navbar-brand" href="index.php"><img src="img/ikdoeict.png" height="20" alt="ikdoeict alt logo"></a>
            <a class="navbar-brand" href="index.php">Mijn takenlijst</a>
        </div>
        <!-- Weer te geven indien ingelogd -->
        <form class="navbar-form navbar-right" method="post" action="logout.php">
            <button type="submit" class="btn btn-default">Uitloggen</button>
        </form>
        <!-- Weer te geven indien niet ingelogd -->
        <ul class="nav navbar-nav navbar-right">
            <li><a href="login.php">Inloggen</a></li>
        </ul>
    </div>

</nav>

<div class="container">
    <div class="col-sm-offset-2 col-sm-8">
        <div class="panel panel-default">
            <div class="panel-heading">
                Inloggen
            </div>
            <div class="panel-body">
            <!-- Display Validation Errors -->
                    <!-- Form Error List -->
                    <div class="alert alert-danger">
                        <strong>Hier is iets misgegaan.</strong>
                        <br><br>
                        <ul>
                            <li>Ongeldige login-gegevens</li>                        
                        </ul>
                    </div>
                <!-- Task Edit Form -->
                <form action="" method="POST" class="form-horizontal">

                    <!-- Task Name -->
                    <div class="form-group">
                        <label for="username" class="col-sm-3 control-label">Gebruikernaam</label>

                        <div class="col-sm-9">
                            <input type="text" name="username" id="username" class="form-control" value="<?php echo htmlentities($username); ?>">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password" class="col-sm-3 control-label">Paswoord</label>

                        <div class="col-sm-9">
                            <input type="password" name="password" id="password" class="form-control" value="">
                        </div>
                    </div>

                    <input type="hidden" name="moduleAction" value="login" />

                    <!-- Add Task Button -->
                    <div class="form-group">
                        <div class="col-sm-offset-3 col-sm-6">
                            <button type="submit" class="btn btn-default">
                                Inloggen
                            </button>
                        </div>
                    </div>
                </form>
                <p class="text-left">Er werd op dit toestel nog niet ingelogd op deze website.</p>
            </div>
        </div>

    </div>
</div>
<footer class="footer mt-auto py-3">
    <div class="container">
        <span class="text-muted">&copy; 2019 Odisee &mdash; Opleiding Elektronica-ICT &mdash; Server-side Web Scripting</span>
    </div>
</footer>

<!-- JavaScripts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</body>