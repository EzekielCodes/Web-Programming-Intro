<?php


/**
 * 
 */
$alphabet = [];
for($i = 0; $i < 26 ; $i++){
    $alphabet[$i] = chr(97 + $i);
}

print_r($alphabet);

/**
 * 
 */
foreach($alphabet as $key => $letter){
    echo ($key + 1 ). $letter;
}

echo PHP_EOL;

/**
 * 
 */

 echo implode(',', $alphabet);

 /**
  * 
  */
 echo count($alphabet) . PHP_EOL . array_shift($alphabet) . PHP_EOL . count($alphabet);
 echo PHP_EOL;

 /***
  * 
  */

$cities = [9000 => 'Gent', 1000 => 'Brussel', 2000 => 'Antwerpen', 
            8500 => 'Kortrijk', 3000 => 'Leuven' , 3500 => 'Hasselt'];

$zips = array_keys($cities);
print_r($zips);

echo array_sum($zips);
echo PHP_EOL;

/***
 * Gewone soort begint van 0 .. asort begint van key
 * value relatie
 */

 asort($cities);
 print_r($cities);


 /**
  * 
  */

  krsort($cities);
  print_r($cities);

  /**
   * 
   */

for ($i = 0; $i < 10000 ; $i += 1000){
    if(array_key_exists($i, $cities)){
        echo strtoupper($cities[$i]) . PHP_EOL;
    }
   }
  
 

  