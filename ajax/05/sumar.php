<?php
header('Content-Type: application/json');

$numero1 = $_POST["numero1"];
$numero2 = $_POST["numero2"];

echo json_encode($numero1 + $numero2);
