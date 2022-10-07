<?php
    
    $getalOne = isset($_GET['getalOne'])  ? $_GET['getalOne'] : ''; ;
    $getalTwo = isset($_GET['getalTwo'])  ? $_GET['getalTwo'] : '';;
    $bewerking = isset($_GET['bewerking']) ? (string) $_GET['bewerking'] : '' ;

    $getalOneCookie = isset($_COOKIE['numberOne'])  ? $_COOKIE['numberOne'] : ''; ;
    $getalTwoCookie = isset($_COOKIE['numberTwo'])  ? $_COOKIE['numberTwo'] : '';;
    $resultCookie = isset($_COOKIE['result'])  ? $_COOKIE['result'] : '';;
    $bewerkingCookie = isset($_COOKIE['bewerk']) ? (string) $_COOKIE['bewerk'] : '' ;

    
    if($getalOne === '' || $getalTwo === '' || $bewerking === ''){
        $getalOne = $getalOneCookie;
        $getalTwo = $getalTwoCookie;
        $bewerkingCookie = $bewerkingCookie;
        $result = $resultCookie;
    }
    $result = 0;
    if(is_numeric($getalOne) && is_numeric($getalTwo) )  {
        if ($bewerking === '+'){
            $result = $getalOne + $getalTwo;
        } else if($bewerking === '/'){
            $result = $getalOne / $getalTwo;
        } else if($bewerking === '-'){
            $result = $getalOne - $getalTwo;
        } else if($bewerking === '*'){
            $result = $getalOne * $getalTwo;
        }

       
        // set cookie
        setcookie('numberOne', $getalOne);
        setcookie('numberTwo', $getalTwo);
        setcookie('bewerk', $bewerking);
        setcookie('result', $result);
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
                <h2> Oefening 2</h2>
                <dl class="clearfix">
                    <dt>
                        <label for="getalOne">Getal 1</label>
                    </dt>
                    <dd class="text">
                        <input type ="text" id = "getalOne" name = "getalOne" value = "<?php echo htmlentities($getalOne); ?>"  />   
                        <span class="message error"></span>
                    </dd>

                    <dt>
                        <label for="getalTwo">Getal 2</label>
                    </dt>
                    <dd class="text">
                        <input type ="text" id = "getalTwo" name = "getalTwo"  value = "<?php echo htmlentities($getalTwo); ?> "/>   
                        <span class="message error"></span>
                    </dd>
                    
                    <dt>
                        <label for="bewerking">Kies een bewerking: </label>
                    </dt>

                    <dd>
                        <select name="bewerking" id="bewerking" value = "<?php echo htmlentities($bewerking); ?> ">
                            <option value="*">*</option>
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="/">/</option>
                        </select>
                    </dd>

                    <dt>
                        <label for="result">Resultaat</label>
                    </dt>

                    <dd>
                        <input type="text" id="result" name="result" disabled value = "<?php echo htmlentities($result); ?>"><br><br>
                    </dd>

                    <dt class="full clearfix" id = "lastrow">
                        <input type = "hidden" name= "moduleAction" value="processName " />
                        <input type = "submit" id = "btnSubmit" name="btnSubmit" value="Send" />
                    </dt>

                </dl>
            </fieldset>
        </form>

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

