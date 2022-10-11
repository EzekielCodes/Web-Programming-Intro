<?php

$name = isset($_GET['name']) ? (string) $_GET['name'] : '' ;
$bedrijf = isset($_GET['bedrijf']) ? (string) $_GET['bedrijf'] : '' ;
$land = isset($_GET['land']) ? (int) $_GET['land'] : 0 ;

$errors = [];
if(strlen(trim($name)) < 3 || trim($name) === ''){
    $errors[] = "Gelieve jouw naam in te vullen";
}

if($land < 1 || $land > 6){
    $errors[] = "Gelieve en land selecteren";
}

	
?><!DOCTYPE html>
<html>
<head>
	<title>Testform</title>
	<meta charset="UTF-8" />
	<link rel="stylesheet" type="text/css" href="styles.css" />
</head>

<body>
    <h2>Schrijf je in voor onze conferene</h2>
    <p><span class="error">* required field</span></p>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="get">  
        Name: 
        <input type="text" name="name" value = "<?php echo htmlentities($name); ?>">
        <span class="error"></span>
        <br><br>
        Bedrijf: <input type="text" name="bedrijf" value = "<?php echo htmlentities($bedrijf); ?>">
        <span class="error"></span>
        <br><br>
        Land:
        <select name="land" id="land" value = "<?php echo htmlentities($land); ?> ">
            <option value="0" <?php if ($land == 0) { echo ' selected="selected"'; }?> >kies een land</option>
            <option value="1" <?php if ($land == 1) { echo ' selected="selected"'; }?> >Belgie</option>
            <option value="2" <?php if ($land == 2) { echo ' selected="selected"'; } ?>>Londen</option>
            <option value="3" <?php if ($land == 3) { echo ' selected="selected"'; } ?>>Spanje</option>
            <option value="4" <?php if ($land == 4) { echo ' selected="selected"'; } ?>>Portugal</option>
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
