<?php

$zin = $argv[1];

$zin_replace = preg_replace('/[^A-Za-z0-9\-]/', ' ', $zin);
$zin_replace = strtolower($zin_replace);
echo $zin_replace;
$zin_array = explode(" ", $zin_replace);

$new_array=array_count_values($zin_array);

print_r($new_array);
