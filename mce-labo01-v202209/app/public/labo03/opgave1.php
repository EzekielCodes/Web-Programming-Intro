<?php

// Get all variables
$name = isset($_GET['name']) ? (string) $_GET['name'] : '';
$moduleAction = isset($_GET['moduleAction']) ? (string) $_GET['moduleAction'] : '';
$msgName = '*';

if($moduleAction !== ''){
    if(strlen(trim($name)) < 3){
        $msgName = "Gelieve jouw naam in te vullen";
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
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="get">
            <fieldset>
                <h2> Oefening 1</h2>
                <dl class="clearfix">
                    <dt>
                        <label for="name">Name</label>
                    </dt>
                    <dd class="text">
                        <input type ="text" id = "name" name = "name" value = "<?php echo htmlentities($name); ?>" />   
                        <span class="message error"><?php echo $msgName; ?></span>
                    </dd>


                    <dt class="full clearfix" id = "lastrow">
                        <input type = "hidden" name= "moduleAction" value="processName " />
                        <input type = "submit" id = "btnSubmit" name="btnSubmit" value="Send" />
                    </dt>
                </dl>
            </fieldset>

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
    </body>
</html>   

