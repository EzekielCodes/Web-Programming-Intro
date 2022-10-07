<?php
function CalculateFactuur(int $kWh, int $aantalKinderen) {
    if($kWh <= 50) {
        $rekening = $kWh * 0.15;
    }
    else if($kWh > 50 && $kWh <= 150) {
        $temp = 50 * 0.15;
        $restkWh = $kWh - 50;
        $rekening = $temp + ($restkWh * 0.25);
    }
    else {
        $temp = (50 * 0.15) + (100 * 0.25);
        $restkWh = $kWh - 150;
        $rekening = $temp + ($restkWh * 0.30);
    }

    if($aantalKinderen >= 3){
        $rekening *= 0.80;
    }
    return $rekening;
  }
    echo CalculateFactuur(50, 0) . PHP_EOL;
    echo CalculateFactuur(100, 0) . PHP_EOL;
    echo CalculateFactuur(150,0) . PHP_EOL;
    echo CalculateFactuur(151,0) . PHP_EOL;
    echo CalculateFactuur(150,3) . PHP_EOL;
?>