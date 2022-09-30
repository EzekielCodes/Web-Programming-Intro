<?php


try{
    $date = new DateTime($argv[1]);

echo ($date->getTimestamp() .PHP_EOL);

echo ($date->format('j-M-Y') .PHP_EOL);

echo $date->format('H:i:s') .PHP_EOL;
}
catch(Exception $e){
    echo 'Caught exception: ' .PHP_EOL;
}
