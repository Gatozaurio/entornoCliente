<?php
header('Content-Type: application/json');

sleep(2);

$errores = [];
if(isset($_POST["numero1"])){
	$numero1 = $_POST["numero1"];
	$errores["numero1"] = [];

	if(!preg_match("/[0-9]+/", $numero1) ){
		$errores["numero1"]["numerico"] = "Debe introducir un número";
	}
	if( $numero1 <=10 ){
		$errores["numero1"]["min"] = "El número debe ser superior a 10.";
	}
}

if(isset($_POST["numero2"])){
	$numero2 = $_POST["numero2"];
	$errores["numero2"] = [];

	if(!preg_match("/[0-9]+/", $numero2) ){
		$errores["numero2"]["numerico"] = "Debe introducir un número";
	}
	if( $numero2 <=10 ){
		$errores["numero2"]["min"] = "El número debe ser superior a 10.";
	}
}

echo json_encode($errores);
