<?php 

	require_once "../vendor/autoload.php";

	//Carregando a classe Route
	$route = new \App\Route;

	print_r($route->getRoutes());
	print_r($route->getUrl());
	print_r($route->run('/'));

?>
