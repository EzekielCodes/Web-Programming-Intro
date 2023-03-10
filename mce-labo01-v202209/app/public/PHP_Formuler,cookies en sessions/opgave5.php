<?php

session_start();

$name = isset($_POST['name']) ? (string) $_POST['name'] : '' ;
$food = isset($_POST['food']) ? (string) $_POST['food'] : '' ;
$bedrijf = isset($_POST['bedrijf']) ? (string) $_POST['bedrijf'] : '' ;
$land = isset($_POST['land']) ? (int) $_POST['land'] : 0 ;
$taal = isset($_POST['fav_language']) ? (string) $_POST['fav_language'] : '';
$errors = [];

$moduleAction = isset($_POST['moduleAction']) ? (string) $_POST['moduleAction'] : '';

$values = array(
    "Bedrijf" => $bedrijf,
    "Land" => $land,
    "Favorite_prograaming_language" => $taal, 
);



if($moduleAction == 'registerEvent'){
   if(strlen(trim($name)) < 3 || trim($name) === '' ){
       $errors[] = "Gelieve jouw naam in te vullen";
    }

    if(strlen(trim($food)) < 3 || trim($food) === '' ){
        $errors[] = "Gelieve een Food restrictions in te vullen";
     }
    
    if($land < 1 || $land > 6){
        $errors[] = "Gelieve en land selecteren";
    }
    
    
    
    if(count($errors) === 0){

        echo $naam;
        $_SESSION['naam'] = $name;
        $_SESSION['array'] = array(
            "Bedrijf" => $bedrijf,
            "Land" => $land,
            "Favorite_prograaming_language" => $taal, 
            "Food restrictions" => $food,
        );
        header('Location: thanks.php');
        exit();
    }
}


	
?><!DOCTYPE html>
<html>
<head>
	<title>Testform</title>
	<meta charset="UTF-8" />
	<link rel="stylesheet" type="text/css" href="styles.css" />
</head>

<body>
    <h2>Schrijf je in voor onze conference</h2>
    <p><span class="error">* required field</span></p>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">  
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
        <p>Please select your Options:</p>
    ??   <input type="radio" id="elo" name="fav_language" value="ELO" <?php if ($taal
		 == 'ELO') { echo ' checked="checked"'; } ?> />
    ??   <label for="html">ELO</label><br>
    ??   <input type="radio" id="infra" name="fav_language" value="INFRA" <?php if ($taal
		 == 'INFRA') { echo ' checked="checked"'; } ?>>
    ??   <label for="infra">INFRA</label><br>
    ??   <input type="radio" id="web" name="fav_language" value="WEB" <?php if ($taal
		 == 'WEB') { echo ' checked="checked"'; } ?>>
    ??   <label for="web">WEB</label><br>
        <input type="radio" id="prog" name="fav_language" value="PROG" <?php if ($taal
		 == 'PROG') { echo ' checked="checked"'; } ?>>
    ??   <label for="prog">PROG</label>
        <br><br>

        Food Restrictions: 
        <input type="text" name="food" value = "<?php echo htmlentities($food); ?>">
        <span class="error"></span>
        <br><br>

        
        <input type = "hidden" name= "moduleAction" value="registerEvent" />
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
