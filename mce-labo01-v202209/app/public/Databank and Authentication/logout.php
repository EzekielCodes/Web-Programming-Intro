<?php

	// start session (starts a new one, or continues the already started one)
	session_start();

	// unset all session vars
	foreach ($_SESSION as $key => $v) unset($_SESSION[$key]);

	// destroy the session
	session_destroy();

	// redirect to loginPage
	header('location: login.php');
	exit();