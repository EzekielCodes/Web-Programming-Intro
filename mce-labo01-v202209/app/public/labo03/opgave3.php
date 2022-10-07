<?php

$name = isset($_GET['name']) ? (string) $_GET['name'] : '' ;
$bedrijf = isset($_GET['bedrijf']) ? (string) $_GET['bedrijf'] : '' ;
	
?><!DOCTYPE html>
<html>
<head>
	<title>Testform</title>
	<meta charset="UTF-8" />
	<link rel="stylesheet" type="text/css" href="styles.css" />
</head>

<body>
    <h2>PHP Form Validation Example</h2>
    <p><span class="error">* required field</span></p>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
        Name: 
        <input type="text" name="name" value = "<?php echo htmlentities($name); ?>">
        <span class="error"></span>
        <br><br>
        Bedrijf: <input type="text" name="bedrijf" value = "<?php echo htmlentities($bedrijf); ?>">
        <span class="error"></span>
        <br><br>
        Land:
        <select name="land" id="land" value = "<?php echo htmlentities($land); ?> ">
            <option value="belgie">Belgie</option>
            <option value="londen">Londen</option>
            <option value="spanje">Spanje</option>
            <option value="portugal">Portugal</option>
        </select>
        <br><br>
        
        <input type = "hidden" name= "moduleAction" value="processName " />
        <input type = "submit" id = "btnSubmit" name="btnSubmit" value="Send" />
    
        
<?php

/**
 * Helper Functions
 * ========================
 */

    /**
     * Dumps a variable
     * @param mixed $var
     * @return void
     */
    function dump($var) {
        echo '<pre>';
        var_dump($var);
        echo '</pre>';
    }


/**
 * Main Program Code
 * ========================
 */

    // dump $_POST
    dump($_GET);

?>
    </form>
</body>
